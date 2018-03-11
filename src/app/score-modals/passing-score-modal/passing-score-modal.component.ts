import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GameService} from '../../game.service';
import {Scores} from '../../score/scores';
import {GameTypes} from '../../score/game-types.enum';
import {PlayerService} from '../../player.service';
import {ScoreCalculatorService} from '../../score-calculator.service';

@Component({
  selector: 'app-passing-score-modal',
  templateUrl: './passing-score-modal.component.html',
  styleUrls: ['./passing-score-modal.component.css']
})
export class PassingScoreModalComponent implements OnInit {

  constructor(protected activeModal: NgbActiveModal, private gameService: GameService, private playersService: PlayerService, private scoreCalc: ScoreCalculatorService) { }

  protected scores: number[];
  protected players: string[];

  ngOnInit() {
    this.scores = Array(this.playersService.getNumberOfPlayers()).fill(0);
    this.players = this.playersService.getPlayers();
  }

  public addAndClose() {
    let score = new Scores(this.scores[0], this.scores[1], this.scores[2], this.scores[3]);
    this.gameService.scoreTable.addEntry(this.scoreCalc.calcPassing(score), GameTypes.Passing);
    this.activeModal.close('Saved');
  }

  public scoreSum(): number {
    return this.scores.reduce((a, b) => a + b, 0);
  }

}
