import { Injectable } from '@angular/core';
import {ScoreTable} from './score/score-table';
import {GameTypes} from './score/game-types.enum';
import {Scores} from './score/scores';

@Injectable()
export class GameService {

  private _scoreTable: ScoreTable;

  constructor() {
    this.generateNewScoreTable();
    // this._scoreTable.addEntry(new Scores(1, -1, 1, -1), GameTypes.Abondance9);
    // this._scoreTable.addEntry(new Scores(-0.5, -1, 0.5, -1), GameTypes.Abondance9);
    // this._scoreTable.addEntry(new Scores(-0.5, -1, 0.5, -1), GameTypes.Abondance9);
  }

  get scoreTable(): ScoreTable {
    return this._scoreTable;
  }

  private generateNewScoreTable(): void {
    this._scoreTable = new ScoreTable();
    this._scoreTable.addEntry(new Scores(0, 0, 0, 0), GameTypes.Other);
  }
}
