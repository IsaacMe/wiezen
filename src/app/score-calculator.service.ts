import { Injectable } from '@angular/core';
import { Scores } from './score/scores';
import { PointsService } from './points.service';
import { GameTypes } from './score/game-types.enum';

@Injectable()
export class ScoreCalculatorService {

  constructor(private points: PointsService) { }

  public calcPassing(tricks: Scores): Scores {
    let pts = this.points.getPoints(GameTypes.Passing);
    let scores = new Scores(0, 0 , 0, 0);

    const tricksSum = tricks.getArray().reduce((a, b) => a + b, 0);

    for (let i = 0; i < 4; i++) {
      scores.setScore(i + 1, (tricksSum - 4 * tricks.getScore(i + 1)) * pts.extra);
    }

    return scores;
  }

  public calcAbondance(player: number, won: boolean, type: GameTypes): Scores {
    if (player < 1 || player > 4) {
      throw "Invalid number of player";
    }

    let pts = this.points.getPoints(type);
    let scores = new Scores(0, 0, 0, 0);
    let baseScore = pts.base;
    if (!won) baseScore *= -1;

    for (let i = 1; i <= 4; i++) {
      if (i == player) scores.setScore(i, 3 * baseScore);
      else scores.setScore(i, -1 * baseScore);
    }

    return scores;
  }

  public calcAskingAndJoining(player1: number, player2: number, tricks: number, type: GameTypes): Scores {
    let scores = new Scores(0, 0, 0, 0);
    let pts = this.points.getPoints(type);
    let baseScore = pts.base;
    if (tricks == 13) {
      baseScore += 8 * pts.extra;
    } else if (tricks >= pts.tricks) {
      baseScore += (tricks - pts.tricks) * pts.extra;
    } else {
      baseScore *= -1;
      baseScore += (tricks - pts.tricks) * pts.extra;
    }

    for (let i = 1; i <= 4; i++) {
      if (i == player1 || i == player2) scores.setScore(i, baseScore);
      else scores.setScore(i, -1 * baseScore);
    }


    return scores;
  }

}
