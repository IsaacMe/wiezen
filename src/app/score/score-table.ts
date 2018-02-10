import {ScoreEntry} from './score-entry';
import {Scores} from './scores';
import {GameTypes} from './game-types.enum';

export class ScoreTable {
  private entries: [ScoreEntry];

  public getTotals(): [number] {
    const scores = this.entries.map(entry => entry.scores.getArray());
    const summer = (acc, curr) => acc.map((b, i) => curr[i] + b);
    return scores.reduce(summer);
  }

  public addEntry(scores: Scores, type: GameTypes): void {
    this.entries.push(new ScoreEntry(scores, type, this.entries.length))
  }

  public removeLast(): void {
    this.entries.pop();
  }

}
