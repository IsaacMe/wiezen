import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { GameService } from '../game.service';
import Big from 'big.js';

@Component({
  selector: 'app-score-current-table',
  templateUrl: './score-current-table.component.html',
  styleUrls: ['./score-current-table.component.css']
})
export class ScoreCurrentTableComponent implements OnInit {

  constructor(public players: PlayerService, private game: GameService) { }

  ngOnInit() {
  }

  getTotalScores(): Big[] {
    return this.game.scoreTable.getTotals();
  }

  getLastScores(): Big[] {
    return this.game.scoreTable.getLastScores();
  }
}
