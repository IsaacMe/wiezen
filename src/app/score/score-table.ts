import {ScoreEntry} from './score-entry';
import {Scores} from './scores';
import {GameTypes} from './game-types.enum';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class ScoreTable {
  private entries: ScoreEntry[];
  private size: BehaviorSubject<number>;

  constructor() {
    this.entries = [];
    this.size = new BehaviorSubject<number>(0);
  }

  public getTotals(): number[] {
    const scores = this.entries.map(entry => entry.scores.getArray());
    const summer = (acc, curr) => acc.map((b, i) => curr[i] + b);
    return scores.reduce(summer);
  }

  public getLastScores(): number[] {
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

  /**
   * Returns a cumulative list of the scores
   * @returns {[number][]}
   */
  public getCumulativeTable(): number[][] {
    function sumArrs(arr1, arr2): number[] {
      if (!arr2) {
        return arr1;
      } else if (!arr1) {
        return arr2;
      } else if (arr2.length === arr1.length) {
        return arr1.map((num, idx) => num + arr2[idx]);
      } else {
        return arr2;
      }
    }

    const cummer = (acc: number[][], curr: number[]): number[][] => acc.concat([sumArrs(acc[acc.length - 1], curr)]);

    const start: number[][] = [];
    return this.entries.map(entry => entry.scores.getArray()).reduce(cummer, start);
  }

  public getCumulativePlayers(): number[][] {
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
