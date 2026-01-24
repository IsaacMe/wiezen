import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GameService} from '../../game.service';
import {Scores} from '../../score/scores';
import {GameTypes} from '../../score/game-types.enum';
import {PlayerService} from '../../player.service';
import {ScoreCalculatorService} from '../../score-calculator.service';
import Big from 'big.js';
import { PassingResult } from '../../score/game-result';

@Component({
  selector: 'app-passing-score-modal',
  templateUrl: './passing-score-modal.component.html',
  styleUrls: ['./passing-score-modal.component.css']
})
export class PassingScoreModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private gameService: GameService,
    private playersService: PlayerService, private scoreCalc: ScoreCalculatorService) { }

    public scores: number[];
    public players: string[];

  ngOnInit() {
    this.scores = Array(this.playersService.getNumberOfPlayers()).fill(0);
    this.players = this.playersService.getPlayers();
  }

  public addAndClose() {
    const score = new Scores(new Big(this.scores[0]), new Big(this.scores[1]), new Big(this.scores[2]), new Big(this.scores[3]));
    const result = new PassingResult(score);
    this.gameService.scoreTable.addEntry(this.scoreCalc.calcPassing(result), result);
    this.activeModal.close('Saved');
  }

  public scoreSum(): number {
    return this.scores.reduce((a, b) => a + b, 0);
  }

}
