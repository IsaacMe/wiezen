import { Injectable } from '@angular/core';
import { Scores } from './score/scores';
import { PointsService } from './points.service';
import { GameTypes } from './score/game-types.enum';
import { PlayerActionEnum } from './score/player-action.enum';
import Big from 'big.js';
import { AbondanceResult, AloneResult, AskingAndJoiningResult, MiseryResult, PassingResult } from './score/game-result';

@Injectable()
export class ScoreCalculatorService {

  constructor(private points: PointsService) { }

  public calcPassing(result: PassingResult): Scores {
    const pts = this.points.getPoints(GameTypes.Passing);
    const scores = new Scores();

    const tricksSum = result.tricks.getArray().reduce((a, b) => a.plus(b), new Big(0));

    for (let i = 0; i < 4; i++) {
      scores.setScore(i + 1, tricksSum.minus(result.tricks.getScore(i + 1).mul(4)).mul(pts.extra));
    }

    return scores;
  }

  public calcAbondance(result: AbondanceResult): Scores {
    if (result.player < 1 || result.player > 4) {
      throw new Error('Invalid number of player');
    }

    const pts = this.points.getPoints(result.type);
    const scores = new Scores();
    let baseScore = pts.base;
    if (!result.won) { baseScore = baseScore.mul(-1); }

    for (let i = 1; i <= 4; i++) {
      if (i === result.player) { scores.setScore(i, baseScore.mul(3)); } else { scores.setScore(i, baseScore.mul(-1)); }
    }

    return scores;
  }

  public calcAskingAndJoining(result: AskingAndJoiningResult): Scores {
    const scores = new Scores();
    const pts = this.points.getPoints(result.type);
    let baseScore = pts.base;
    if (result.tricks === 13) {
      baseScore = baseScore.plus(pts.extra.times(8));
    } else if (result.tricks >= pts.tricks) {
      baseScore = baseScore.plus(pts.extra.mul(result.tricks - pts.tricks));
    } else {
      baseScore = baseScore.mul(-1);
      baseScore = baseScore.plus(pts.extra.mul(result.tricks - pts.tricks));
    }

    for (let i = 1; i <= 4; i++) {
      if (i === result.player1 || i === result.player2) { scores.setScore(i, baseScore); } else { scores.setScore(i, baseScore.mul(-1)); }
    }

    return scores;
  }

  public calcAlone(result: AloneResult): Scores {
    const scores = new Scores();
    const pts = this.points.getPoints(GameTypes.Alone);
    let baseScore = pts.base;

    if (result.tricks === 13) {
      baseScore = baseScore.plus(pts.extra.mul(result.tricks - pts.tricks));
      baseScore = baseScore.mul(2);
    } else if (result.tricks >= pts.tricks) {
      baseScore = baseScore.plus(pts.extra.mul(result.tricks - pts.tricks));
    } else {
      baseScore = baseScore.mul(-1);
      baseScore = baseScore.plus(pts.extra.mul(result.tricks - pts.tricks));
    }

    for (let i = 1; i <= 4; i++) {
      if (i === result.player) { scores.setScore(i, baseScore.mul(3)); } else { scores.setScore(i, baseScore.mul(-1)); }
    }

    return scores;
  }

  public calcMisery(result: MiseryResult) {
    const scores = new Scores();
    const pts = this.points.getPoints(result.type);

    for (let p = 0; p < result.playerActions.length; p++) {
      let current = pts.base.mul(3);
      let others = pts.base.mul(-1);
      const action = result.playerActions[p];

      if (action === PlayerActionEnum.Lose) {
        current = current.mul(-1);
        others = others.mul(-1);
      } else if (action === PlayerActionEnum.DidNotPlay) {
        continue;
      }

      for (let i = 1; i <= 4; i++) {
        if (i === p + 1) {
          scores.setScore(i, scores.getScore(i).plus(current));
        } else {
          scores.setScore(i, scores.getScore(i).plus(others));
        }
      }
    }

    return scores;
  }

}
