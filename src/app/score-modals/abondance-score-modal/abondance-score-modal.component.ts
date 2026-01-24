import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GameService} from '../../game.service';
import {ScoreCalculatorService} from '../../score-calculator.service';
import {GameTypes} from '../../score/game-types.enum';
import { AbondanceResult } from '../../score/game-result';

@Component({
    selector: 'app-abondance-score-modal',
    templateUrl: './abondance-score-modal.component.html',
    styleUrls: ['./abondance-score-modal.component.css'],
    standalone: false
})
export class AbondanceScoreModalComponent implements OnInit {

  @Input() gameType: GameTypes;
  public win: boolean;
  public player: number;

  constructor(public activeModal: NgbActiveModal, private gameService: GameService, private scoreCalc: ScoreCalculatorService) { }

  ngOnInit() {
  }

  public addAndClose() {
    const result = new AbondanceResult(this.player, this.win, this.gameType);
    this.gameService.scoreTable.addEntry(this.scoreCalc.calcAbondance(result), result);
    this.activeModal.close('Saved');
  }

  get gameName(): string {
    if (this.gameType === GameTypes.Abondance9) {
      return 'Abondance 9';
    } else if (this.gameType === GameTypes.Abondance10) {
      return 'Abondance 10';
    } else if (this.gameType === GameTypes.Abondance11) {
      return 'Abondance 11';
    } else if (this.gameType === GameTypes.Abondance12) {
      return 'Abondance 12';
    } else if (this.gameType === GameTypes.Solo) {
      return 'Solo';
    } else if (this.gameType === GameTypes.SoloSlim) {
      return 'Solo slim';
    } else {
      throw new Error('Invalid abondance game');
    }
  }

}
