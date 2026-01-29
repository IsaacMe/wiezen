import Big from 'big.js';

export class Scores {
  private readonly scores: Big[];

  /**
   * Create a new Scores instance.
   * @param values Optional array of 4 Big values, or 4 individual Big parameters
   */
  constructor(values?: Big[] | Big, p2?: Big, p3?: Big, p4?: Big) {
    if (Array.isArray(values)) {
      if (values.length !== 4) {
        throw new Error('Scores array must have exactly 4 elements');
      }
      this.scores = [...values];
    } else if (values !== undefined) {
      // Legacy constructor: 4 individual parameters
      this.scores = [
        values,
        p2 ?? new Big(0),
        p3 ?? new Big(0),
        p4 ?? new Big(0)
      ];
    } else {
      // Default: all zeros
      this.scores = [new Big(0), new Big(0), new Big(0), new Big(0)];
    }
  }

  /**
   * Deserialize from JSON. Supports both legacy format (player1-4) and new format (scores array).
   */
  static fromJSON(data: any): Scores {
    // Support legacy format with player1, player2, player3, player4
    if ('player1' in data) {
      if (isNaN(data.player1) || isNaN(data.player2) || isNaN(data.player3) || isNaN(data.player4)) {
        throw new SyntaxError('Scores array invalid');
      }
      return new Scores([
        new Big(data.player1),
        new Big(data.player2),
        new Big(data.player3),
        new Big(data.player4)
      ]);
    }

    // New format with scores array
    if (Array.isArray(data.scores) && data.scores.length === 4) {
      return new Scores(data.scores.map((v: any) => new Big(v)));
    }

    throw new SyntaxError('Scores array invalid');
  }

  /**
   * Get a copy of all scores as an array.
   */
  public getArray(): Big[] {
    return [...this.scores];
  }

  /**
   * Set score for a player (1-based index for API compatibility).
   * @param player Player number (1-4)
   * @param score The score to set
   */
  public setScore(player: number, score: Big): void {
    if (player < 1 || player > 4) {
      throw new Error(`Invalid player number: ${player}. Must be 1-4.`);
    }
    this.scores[player - 1] = score;
  }

  /**
   * Get score for a player (1-based index for API compatibility).
   * @param player Player number (1-4)
   * @returns The player's score
   */
  public getScore(player: number): Big {
    if (player < 1 || player > 4) {
      throw new Error(`Invalid player number: ${player}. Must be 1-4.`);
    }
    return this.scores[player - 1];
  }

  /**
   * Serialize to JSON. Uses new array format.
   */
  public toJSON(): { scores: string[] } {
    return {
      scores: this.scores.map(s => s.toString())
    };
  }
}
