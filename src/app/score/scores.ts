export class Scores {
  player1: number;
  player2: number;
  player3: number;
  player4: number;

  constructor(player1: number, player2: number, player3: number, player4: number) {
    this.player1 = player1;
    this.player2 = player2;
    this.player3 = player3;
    this.player4 = player4;
  }

  public getArray(): [number] {
    return [this.player1, this.player2, this.player3, this.player4]
  }
}
