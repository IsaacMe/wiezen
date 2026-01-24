import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ScoreCalculatorService} from '../../score-calculator.service';
import {GameService} from '../../game.service';
import {GameTypes} from '../../score/game-types.enum';
import {PointsService} from '../../points.service';
import { AloneResult } from '../../score/game-result';

@Component({
    selector: 'app-alone-score-modal',
    templateUrl: './alone-score-modal.component.html',
    styleUrls: ['./alone-score-modal.component.css'],
    standalone: false
})
export class AloneScoreModalComponent implements OnInit {

  public player: number;
  public tricks: number;
  public gameType: GameTypes = GameTypes.Alone;

  constructor(public activeModal: NgbActiveModal, public points: PointsService,
    private gameService: GameService, private scoreCalc: ScoreCalculatorService) { }

  ngOnInit() {
  }

  public addAndClose() {
    const result = new AloneResult(this.player, this.tricks);
    this.gameService.scoreTable.addEntry(this.scoreCalc.calcAlone(result), result);
    this.activeModal.close('Saved');
  }

}
