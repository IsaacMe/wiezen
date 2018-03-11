import { Injectable } from '@angular/core';
import { GameTypes } from './score/game-types.enum';

@Injectable()
export class PointsService {

  private points: Map<GameTypes, Point>;

  constructor() {
    this.points = new Map<GameTypes, Point>();
    this.points.set(GameTypes.Passing, {base: 0, extra: 0.05, tricks: 0});
  }

  public getPoints(game: GameTypes): Point {
    return this.points.get(game);
  }

}


export class Point {
  base: number;
  extra: number;
  tricks: number;
}
