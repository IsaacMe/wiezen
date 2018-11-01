import { Injectable } from '@angular/core';
import { GameTypes } from './score/game-types.enum';

@Injectable()
export class PointsService {

  private points: Map<GameTypes, Point>;

  constructor() {
    this.points = new Map<GameTypes, Point>();
    this.points.set(GameTypes.SoloSlim, {base: 1.5, extra: 0, tricks: 13});
    this.points.set(GameTypes.Solo, {base: 1, extra: 0, tricks: 13});
    this.points.set(GameTypes.Abondance12, {base: 0.4, extra: 0, tricks: 12});
    this.points.set(GameTypes.Abondance11, {base: 0.3, extra: 0, tricks: 11});
    this.points.set(GameTypes.Abondance10, {base: 0.25, extra: 0, tricks: 10});
    this.points.set(GameTypes.Abondance9, {base: 0.2, extra: 0, tricks: 9});
    this.points.set(GameTypes.OpenMisery, {base: 0.5, extra: 0, tricks: 0});
    this.points.set(GameTypes.Misery, {base: 0.25, extra: 0, tricks: 0});
    this.points.set(GameTypes.Trull, {base: 0.1, extra: 0.06, tricks: 8});
    this.points.set(GameTypes.AskingAndJoining, {base: 0.05, extra: 0.03, tricks: 8});
    this.points.set(GameTypes.Alone, {base: 0.05, extra: 0.03, tricks: 5});
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
