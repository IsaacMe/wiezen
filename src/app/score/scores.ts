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

  public getArray(): number[] {
    return [this.player1, this.player2, this.player3, this.player4]
  }

  public setScore(player: number, score: number): void {
    if (player === 1)
      this.player1 = score;
    else if (player === 2)
      this.player2 = score;
    else if (player === 3)
      this.player3 = score;
    else if (player === 4)
      this.player4 = score;
  }

  public getScore(player: number): number {
    if (player === 1)
      return this.player1;
    else if (player === 2)
      return this.player2;
    else if (player === 3)
      return this.player3;
    else if (player === 4)
      return this.player4;
  }
}
