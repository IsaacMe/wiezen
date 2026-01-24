import {Component, Input} from '@angular/core';
import {GameTypes} from '../../score/game-types.enum';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PointsService} from '../../points.service';
import {GameService} from '../../game.service';
import {ScoreCalculatorService} from '../../score-calculator.service';
import { AskingAndJoiningResult } from '../../score/game-result';

@Component({
    selector: 'app-asking-and-joining-score-modal',
    templateUrl: './asking-and-joining-score-modal.component.html',
    styleUrls: ['./asking-and-joining-score-modal.component.css'],
    standalone: false
})
export class AskingAndJoiningScoreModalComponent {

  @Input() gameType: GameTypes.AskingAndJoining | GameTypes.Trull;
  public selectedPlayers: number[] = [];
  public tricks: number;

  constructor(public activeModal: NgbActiveModal, public points: PointsService,
    private gameService: GameService, private scoreCalc: ScoreCalculatorService) { }

  public addAndClose() {
    const result = new AskingAndJoiningResult(this.selectedPlayers[0], this.selectedPlayers[1], this.tricks, this.gameType);
    this.gameService.scoreTable.addEntry(
      this.scoreCalc.calcAskingAndJoining(result), result);
    this.activeModal.close('Saved');
  }


  get gameName(): string {
    if (this.gameType === GameTypes.AskingAndJoining) {
      return 'Vraag en mee';
    } else if (this.gameType === GameTypes.Trull) {
      return 'Troel';
    } else {
      throw new Error('Invalid Asking and joining game');
    }
  }

}
