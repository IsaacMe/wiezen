import {Component, Input, OnInit} from '@angular/core';
import {GameTypes} from '../../score/game-types.enum';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PointsService} from '../../points.service';
import {GameService} from '../../game.service';
import {ScoreCalculatorService} from '../../score-calculator.service';

@Component({
  selector: 'app-asking-and-joining-score-modal',
  templateUrl: './asking-and-joining-score-modal.component.html',
  styleUrls: ['./asking-and-joining-score-modal.component.css']
})
export class AskingAndJoiningScoreModalComponent implements OnInit {

  @Input() gameType: GameTypes;
  public player1: number;
  public player2: number;
  public tricks: number;

  constructor(public activeModal: NgbActiveModal, public points: PointsService,
    private gameService: GameService, private scoreCalc: ScoreCalculatorService) { }

  ngOnInit() {
  }

  public addAndClose() {
    this.gameService.scoreTable.addEntry(
      this.scoreCalc.calcAskingAndJoining(this.player1, this.player2, this.tricks, this.gameType), this.gameType);
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
