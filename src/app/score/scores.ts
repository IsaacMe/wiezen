export class Scores {
  player1: number;
  player2: number;
  player3: number;
  player4: number;

  public getArray(): [number] {
    return [this.player1, this.player2, this.player3, this.player4]
  }
}
