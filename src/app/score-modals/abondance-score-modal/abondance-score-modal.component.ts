import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GameService} from '../../game.service';
import {ScoreCalculatorService} from '../../score-calculator.service';
import {GameTypes} from '../../score/game-types.enum';

@Component({
  selector: 'app-abondance-score-modal',
  templateUrl: './abondance-score-modal.component.html',
  styleUrls: ['./abondance-score-modal.component.css']
})
export class AbondanceScoreModalComponent implements OnInit {

  @Input() level: number;
  protected win: boolean;
  protected player: number;

  constructor(protected activeModal: NgbActiveModal, private gameService: GameService, private scoreCalc: ScoreCalculatorService) { }

  ngOnInit() {
  }

  public addAndClose() {
    this.gameService.scoreTable.addEntry(this.scoreCalc.calcAbondance(this.player, this.win, this.gameType()), this.gameType());
    this.activeModal.close('Saved');
  }

  private gameType(): GameTypes {
    if (this.level == 9) return GameTypes.Abondance9;
    else if (this.level == 10) return GameTypes.Abondance10;
    else if (this.level == 11) return GameTypes.Abondance11;
    else if (this.level == 12) return GameTypes.Abondance12;
    else throw 'Invalid abondance level';
  }

}
