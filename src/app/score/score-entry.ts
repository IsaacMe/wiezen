import {GameTypes} from './game-types.enum';
import {Scores} from './scores';

export class ScoreEntry {
  private _scores: Scores;
  private _game: GameTypes;
  private _number: number;

  constructor(scores: Scores, game: GameTypes, number: number) {
    this._scores = scores;
    this._game = game;
    this._number = number;
  }

  get game(): GameTypes {
    return this._game;
  }

  get number(): number {
    return this._number;
  }

  get scores(): Scores {
    return this._scores;
  }
}
