import Big from 'big.js';

export class Scores {
  player1: Big;
  player2: Big;
  player3: Big;
  player4: Big;

  static fromJSON(scores: any): Scores {
    if (!isNaN(scores.player1) && !isNaN(scores.player2) && !isNaN(scores.player3) && !isNaN(scores.player4)) {
      return new Scores(new Big(scores.player1), new Big(scores.player2), new Big(scores.player3), new Big(scores.player4));
    } else {
      throw new SyntaxError('Scores array invalid');
    }
  }

  constructor(player1?: Big, player2?: Big, player3?: Big, player4?: Big) {
    if (player1) {
      this.player1 = player1;
    } else {
      this.player1 = new Big(0);
    }

    if (player2) {
      this.player2 = player2;
    } else {
      this.player2 = new Big(0);
    }

    if (player3) {
      this.player3 = player3;
    } else {
      this.player3 = new Big(0);
    }

    if (player4) {
      this.player4 = player4;
    } else {
      this.player4 = new Big(0);
    }
  }

  public getArray(): Big[] {
    return [this.player1, this.player2, this.player3, this.player4];
  }

  public setScore(player: number, score: Big): void {
    if (player === 1) {
      this.player1 = score;
    } else if (player === 2) {
      this.player2 = score;
    } else if (player === 3) {
      this.player3 = score;
    } else if (player === 4) {
      this.player4 = score;
    }
  }

  public getScore(player: number): Big {
    if (player === 1) {
      return this.player1;
    } else if (player === 2) {
      return this.player2;
    } else if (player === 3) {
      return this.player3;
    } else if (player === 4) {
      return this.player4;
    }
  }
}
