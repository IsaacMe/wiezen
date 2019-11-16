import {ScoreEntry} from './score-entry';
import {Scores} from './scores';
import {GameTypes} from './game-types.enum';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import Big from 'big.js';

export class ScoreTable {
  private entries: ScoreEntry[];
  private size: BehaviorSubject<number>;

  constructor() {
    this.entries = [];
    this.size = new BehaviorSubject<number>(0);
  }

  public getTotals(): Big[] {
    const scores = this.entries.map(entry => entry.scores.getArray());
    return scores.reduce((acc, curr) => acc.map((b, i) => curr[i].plus(b)));
  }

  public getLastScores(): Big[] {
    return this.entries[this.entries.length - 1].scores.getArray();
  }

  public addEntry(scores: Scores, type: GameTypes): void {
    this.entries.push(new ScoreEntry(scores, type, this.entries.length));
    this.size.next(this.entries.length);
  }

  public removeLast(): void {
    this.entries.pop();
    this.size.next(this.entries.length);
  }

  public clearTable(startValue: Scores, type: GameTypes): void {
    this.entries = [new ScoreEntry(startValue, type, 0)];
    this.size.next(this.entries.length);
  }

  public fromJSON(scores: string) {
    const scoresArr = JSON.parse(scores);
    const tempEntries = [];

    if (scoresArr instanceof Array) {
      for (const scoresObj of scoresArr) {
        tempEntries.push(ScoreEntry.fromJSON(scoresObj));
      }

      this.entries = tempEntries;
      this.size.next(this.entries.length);
    } else {
      throw new SyntaxError('Scores not as array');
    }
  }

  public toJSON(): any {
    return this.entries;
  }

  /**
   * Returns a cumulative list of the scores
   * @returns {[Big][]}
   */
  public getCumulativeTable(): Big[][] {
    function sumArrs(arr1: Big[], arr2: Big[]): Big[] {
      if (!arr2) {
        return arr1;
      } else if (!arr1) {
        return arr2;
      } else if (arr2.length === arr1.length) {
        return arr1.map((num, idx) => num.plus(arr2[idx]));
      } else {
        return arr2;
      }
    }

    const cummer = (acc: Big[][], curr: Big[]): Big[][] => acc.concat([sumArrs(acc[acc.length - 1], curr)]);

    const start: Big[][] = [];
    return this.entries.map(entry => entry.scores.getArray()).reduce(cummer, start);
  }

  public getCumulativePlayers(): Big[][] {
    const cum = this.getCumulativeTable();
    return cum[0].map((col, i) => cum.map(row => row[i]));
  }

  public getObservableSize(): BehaviorSubject<number> {
    return this.size;
  }

  [Symbol.iterator](): Iterator<ScoreEntry> {
    let index = -1;
    const data  = this.entries;

    return {
      next: () => ({ value: data[++index], done: !(index in data) })
    };
  }

}
