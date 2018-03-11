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

}
