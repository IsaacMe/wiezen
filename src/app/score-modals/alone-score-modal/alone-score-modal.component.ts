import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ScoreCalculatorService} from '../../score-calculator.service';
import {GameService} from '../../game.service';
import {GameTypes} from '../../score/game-types.enum';
import {PointsService} from '../../points.service';

@Component({
  selector: 'app-alone-score-modal',
  templateUrl: './alone-score-modal.component.html',
  styleUrls: ['./alone-score-modal.component.css']
})
export class AloneScoreModalComponent implements OnInit {

  protected player: number;
  protected tricks: number;
  protected gameType: GameTypes = GameTypes.Alone;

  constructor(protected activeModal: NgbActiveModal, protected points: PointsService,
    private gameService: GameService, private scoreCalc: ScoreCalculatorService) { }

  ngOnInit() {
  }

  public addAndClose() {
    this.gameService.scoreTable.addEntry(this.scoreCalc.calcAlone(this.player, this.tricks), this.gameType);
    this.activeModal.close('Saved');
  }

}
