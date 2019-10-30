import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-score-current-table',
  templateUrl: './score-current-table.component.html',
  styleUrls: ['./score-current-table.component.css']
})
export class ScoreCurrentTableComponent implements OnInit {

  constructor(protected players: PlayerService, private game: GameService) { }

  ngOnInit() {
  }

  getTotalScores(): number[] {
    return this.game.scoreTable.getTotals();
  }

  getLastScores(): number[] {
    return this.game.scoreTable.getLastScores();
  }
}
