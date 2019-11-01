import { Injectable } from '@angular/core';
import { GameTypes } from './score/game-types.enum';
import Big from 'big.js';

@Injectable()
export class PointsService {

  private points: Map<GameTypes, Point>;

  constructor() {
    this.points = new Map<GameTypes, Point>();
    this.points.set(GameTypes.SoloSlim, {base: new Big(1.5), extra: new Big(0), tricks: 13});
    this.points.set(GameTypes.Solo, {base: new Big(1), extra: new Big(0), tricks: 13});
    this.points.set(GameTypes.Abondance12, {base: new Big(0.4), extra: new Big(0), tricks: 12});
    this.points.set(GameTypes.Abondance11, {base: new Big(0.3), extra: new Big(0), tricks: 11});
    this.points.set(GameTypes.Abondance10, {base: new Big(0.25), extra: new Big(0), tricks: 10});
    this.points.set(GameTypes.Abondance9, {base: new Big(0.2), extra: new Big(0), tricks: 9});
    this.points.set(GameTypes.OpenMisery, {base: new Big(0.5), extra: new Big(0), tricks: 0});
    this.points.set(GameTypes.Misery, {base: new Big(0.25), extra: new Big(0), tricks: 0});
    this.points.set(GameTypes.Trull, {base: new Big(0.1), extra: new Big(0.06), tricks: 8});
    this.points.set(GameTypes.AskingAndJoining, {base: new Big(0.05), extra: new Big(0.03), tricks: 8});
    this.points.set(GameTypes.Alone, {base: new Big(0.05), extra: new Big(0.03), tricks: 5});
    this.points.set(GameTypes.Passing, {base: new Big(0), extra: new Big(0.05), tricks: 0});
  }

  public getPoints(game: GameTypes): Point {
    return this.points.get(game);
  }

}


export class Point {
  base: Big;
  extra: Big;
  tricks: number;
}
