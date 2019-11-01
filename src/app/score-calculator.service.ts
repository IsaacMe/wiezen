import { Injectable } from '@angular/core';
import { Scores } from './score/scores';
import { PointsService } from './points.service';
import { GameTypes } from './score/game-types.enum';
import { PlayerActionEnum } from './score/player-action.enum';
import Big from 'big.js';

@Injectable()
export class ScoreCalculatorService {

  constructor(private points: PointsService) { }

  public calcPassing(tricks: Scores): Scores {
    const pts = this.points.getPoints(GameTypes.Passing);
    const scores = new Scores();

    const tricksSum = tricks.getArray().reduce((a, b) => a.plus(b), new Big(0));

    for (let i = 0; i < 4; i++) {
      scores.setScore(i + 1, tricksSum.minus(tricks.getScore(i + 1).mul(4)).mul(pts.extra));
    }

    return scores;
  }

  public calcAbondance(player: number, won: boolean, type: GameTypes): Scores {
    if (player < 1 || player > 4) {
      throw new Error('Invalid number of player');
    }

    const pts = this.points.getPoints(type);
    const scores = new Scores();
    let baseScore = pts.base;
    if (!won) { baseScore = baseScore.mul(-1); }

    for (let i = 1; i <= 4; i++) {
      if (i === player) { scores.setScore(i, baseScore.mul(3)); } else { scores.setScore(i, baseScore.mul(-1)); }
    }

    return scores;
  }

  public calcAskingAndJoining(player1: number, player2: number, tricks: number, type: GameTypes): Scores {
    const scores = new Scores();
    const pts = this.points.getPoints(type);
    let baseScore = pts.base;
    if (tricks === 13) {
      baseScore = baseScore.plus(pts.extra.times(8));
    } else if (tricks >= pts.tricks) {
      baseScore = baseScore.plus(pts.extra.mul(tricks - pts.tricks));
    } else {
      baseScore = baseScore.mul(-1);
      baseScore = baseScore.plus(pts.extra.mul(tricks - pts.tricks));
    }

    for (let i = 1; i <= 4; i++) {
      if (i === player1 || i === player2) { scores.setScore(i, baseScore); } else { scores.setScore(i, baseScore.mul(-1)); }
    }

    return scores;
  }

  public calcAlone(player: number, tricks: number): Scores {
    const scores = new Scores();
    const pts = this.points.getPoints(GameTypes.Alone);
    let baseScore = pts.base;

    if (tricks === 13) {
      baseScore = baseScore.plus(pts.extra.mul(tricks - pts.tricks));
      baseScore = baseScore.mul(2);
    } else if (tricks >= pts.tricks) {
      baseScore = baseScore.plus(pts.extra.mul(tricks - pts.tricks));
    } else {
      baseScore = baseScore.mul(-1);
      baseScore = baseScore.plus(pts.extra.mul(tricks - pts.tricks));
    }

    for (let i = 1; i <= 4; i++) {
      if (i === player) { scores.setScore(i, baseScore.mul(3)); } else { scores.setScore(i, baseScore.mul(-1)); }
    }

    return scores;
  }

  public calcMisery(playerActions: PlayerActionEnum[], type: GameTypes) {
    const scores = new Scores();
    const pts = this.points.getPoints(type);

    for (let p = 0; p < playerActions.length; p++) {
      let current = pts.base.mul(3);
      let others = pts.base.mul(-1);
      const action = playerActions[p];

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
