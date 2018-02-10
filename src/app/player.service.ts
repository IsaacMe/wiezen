import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

  private players: [string];

  constructor() {
    this.players = ['', '', '', '']
  }

  /**
   * Get the name of the player
   * @param {number} num The number
   * @returns {string} Name of the player
   */
  public getPlayerName(num: number): string {
    if (num >= 0 && num < 4) {
      return this.players[num];
    } else {
      return '';
    }
  }

  /**
   * Set the name of the player
   * @param {number} num The number of the player
   * @param {string} name The new name of the ^^layer
   */
  public setPlayerName(num: number, name: string): void {
    if (num >= 0 && num < 4) {
      console.log("change");
      this.players[num] = name;
    }
  }

  /**
   * Get the number of players
   * @returns {number} The number
   */
  public getNumberOfPlayers(): number {
    return 4;
  }

}
