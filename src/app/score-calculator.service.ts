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

}
