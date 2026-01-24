import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { GameService } from '../game.service';
import { Subscription } from 'rxjs';
import Big from 'big.js';

@Component({
    selector: 'app-score-current-table',
    templateUrl: './score-current-table.component.html',
    styleUrls: ['./score-current-table.component.css'],
    standalone: false
})
export class ScoreCurrentTableComponent implements OnInit, OnDestroy {
  totalScores: Big[] = [];
  lastScores: Big[] = [];
  round: number = 0;
  currentGiver: number = 0;

  private subscription: Subscription | null = null;

  constructor(public players: PlayerService, private game: GameService) { }

  ngOnInit() {
    this.updateScores();
    this.subscription = this.game.scoreTable.getObservableSize().subscribe(() => {
      this.updateScores();
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private updateScores(): void {
    this.round = this.game.scoreTable.getRoundCount();
    this.currentGiver = (this.round - 1) % 4;

    if (this.round > 0) {
      this.totalScores = this.game.scoreTable.getTotals();
      this.lastScores = this.game.scoreTable.getLastScores();
    } else {
      this.totalScores = [];
      this.lastScores = [];
    }
  }
}
