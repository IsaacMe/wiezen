import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

  private players: string[];
  private colors = ['#066fd1', '#d63939', '#2fb344', '#f59f00'];
  private localStorageKey = 'players';

  constructor() {
    if (!localStorage.getItem('players')) {
      this.initDefaultPlayers();
    } else {
      try {
        const storagePlayers = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (storagePlayers instanceof Array && storagePlayers.length === 4) {
          this.players = [];
          for (const storagePlayer of storagePlayers) {
            this.players.push(storagePlayer.toString());
          }
        } else {
          throw new SyntaxError('Players not of type array');
        }

      } catch (e) {
        if (e instanceof SyntaxError) {
          this.initDefaultPlayers();
        } else {
          throw e;
        }
      }


    }
  }

  public getPlayerColor(num: number): string{
    if (num >= 0 && num < 4) {
      return this.colors[num];
    } else {
      return '';
    } 
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
      this.players[num] = name;
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.players));
    }
  }

  /**
   * Get the number of players
   * @returns {number} The number
   */
  public getNumberOfPlayers(): number {
    return 4;
  }

  public getPlayers(): string[] {
    return this.players;
  }

  private initDefaultPlayers() {
    this.players = ['Speler 1', 'Speler 2', 'Speler 3', 'Speler 4'];
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.players));
  }

}
