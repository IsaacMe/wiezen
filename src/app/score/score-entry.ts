import { GameResult, GameResultfromJSON } from './game-result';
import {Scores} from './scores';

export class ScoreEntry {
  private _scores: Scores;
  private _result: GameResult;
  private _number: number;

  constructor(scores: Scores, result: GameResult, number: number) {
    this._scores = scores;
    this._result = result;
    this._number = number;
  }

  get result(): GameResult {
    return this._result;
  }

  get number(): number {
    return this._number;
  }

  get scores(): Scores {
    return this._scores;
  }

  static fromJSON(entry: any): ScoreEntry {
    if (!isNaN(entry.number)) {
      return new ScoreEntry(Scores.fromJSON(entry.scores), GameResultfromJSON(entry.result), entry.number);
    } else {
      throw new SyntaxError('Score entry invalid');
    }
  }

  public toJSON(): any {
    return { scores: this._scores, result: this._result, number: this._number};
  }
}
