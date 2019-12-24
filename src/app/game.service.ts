import { Injectable } from '@angular/core';
import {ScoreTable} from './score/score-table';
import {GameTypes} from './score/game-types.enum';
import {Scores} from './score/scores';

@Injectable()
export class GameService {

  private _scoreTable: ScoreTable;
  private _localStorageKey = 'scores';
  private _triedToLoad = false;

  constructor() {
    this.generateNewScoreTable();

    if (localStorage.getItem(this._localStorageKey)) {
      try {
        this._scoreTable.fromJSON(localStorage.getItem(this._localStorageKey));
      } catch (e) {
        if (!(e instanceof SyntaxError)) {
          throw e;
        } else {
          console.log(e);
        }
      }
    }
    this._triedToLoad = true;
  }

  get scoreTable(): ScoreTable {
    return this._scoreTable;
  }

  public startNewGame() {
    this._scoreTable.clearTable(new Scores(), GameTypes.Other);
  }

  private generateNewScoreTable(): void {
    this._scoreTable = new ScoreTable();
    this._scoreTable.addEntry(new Scores(), GameTypes.Other);
    this._scoreTable.getObservableSize().subscribe(() => this.storeScoreTable());
  }

  private storeScoreTable(): void {
    if (this._triedToLoad) {
      localStorage.setItem(this._localStorageKey, JSON.stringify(this._scoreTable));
    }
  }
}
