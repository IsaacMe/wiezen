import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { GameService } from '../game.service';
import Big from 'big.js';
import { GameTypes } from '../score/game-types.enum';
import { AbondanceResult, AloneResult, AskingAndJoiningResult, MiseryResult, PassingResult } from '../score/game-result';
import { PlayerActionEnum } from '../score/player-action.enum';

@Component({
  selector: 'app-last-game-summary',
  templateUrl: './last-game-summary.component.html',
  styleUrls: ['./last-game-summary.component.css']
})
export class LastGameSummaryComponent implements OnInit {

  private readonly gameToName = {
    [GameTypes.Abondance9]: "Abondance 9",
    [GameTypes.Abondance10]: "Abondance 10",
    [GameTypes.Abondance11]: "Abondance 11",
    [GameTypes.Abondance12]: "Abondance 12",
    [GameTypes.Solo]: "Solo",
    [GameTypes.SoloSlim]: "Solo Slim",
    [GameTypes.Alone]: "Alleen",
    [GameTypes.AskingAndJoining]: "Vraag en Mee",
    [GameTypes.Passing]: "Passpel",
    [GameTypes.Misery]: "Miserie",
    [GameTypes.OpenMisery]: "Open Miserie",
    [GameTypes.Trull]: "Troel"
  }

  constructor(public players: PlayerService, private game: GameService) { }

  ngOnInit() {
  }

  getLastSummary(): string {
    const result = this.game.scoreTable.getLastScoreEntry().result;

    if ([GameTypes.Abondance9, GameTypes.Abondance10, GameTypes.Abondance11, GameTypes.Abondance12, GameTypes.Solo, GameTypes.SoloSlim].includes(result.type)) {
      const resultA = result as AbondanceResult;
      return `${this.players.getPlayerName(resultA.player - 1)} ${resultA.won ? "wint" : "verliest"} ${this.gameToName[resultA.type]}`
    } else if ([GameTypes.AskingAndJoining, GameTypes.Trull].includes(result.type)) {
      const resultA = result as AskingAndJoiningResult;
      return `${this.players.getPlayerName(resultA.player1 - 1)} en ${this.players.getPlayerName(resultA.player2 - 1)} spelen ${this.gameToName[resultA.type]} en halen ${resultA.tricks} slagen`
    } else if (result.type === GameTypes.Alone) {
      const resultA = result as AloneResult;
      return `${this.players.getPlayerName(resultA.player - 1)} speelt ${this.gameToName[resultA.type]} en haalt ${resultA.tricks} slagen`
    } else if (result.type === GameTypes.Passing) {
      const resultP = result as PassingResult;
      return `Er wordt ${this.gameToName[resultP.type]} gespeeld:${resultP.tricks.getArray().map((value: Big, index: number) => ` ${this.players.getPlayerName(index)} haalt ${value} slagen`)} `
    } else if ([GameTypes.Misery, GameTypes.OpenMisery].includes(result.type)) {
      const resultA = result as MiseryResult;
      return `${resultA.playerActions.map((value: PlayerActionEnum, index: number) => (value !== PlayerActionEnum.DidNotPlay) ? `${this.players.getPlayerName(index)} ${value === PlayerActionEnum.Win ? "wint" : "verliest"}` : "").join(" ")} ${this.gameToName[resultA.type]}`;
    } else {
      return "Nieuw spel";
    }
  }


}
