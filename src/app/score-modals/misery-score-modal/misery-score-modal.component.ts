import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../../game.service';
import { ScoreCalculatorService } from '../../score-calculator.service';
import { GameTypes } from '../../score/game-types.enum';
import { PlayerActionEnum } from '../../score/player-action.enum';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-misery-score-modal',
  templateUrl: './misery-score-modal.component.html',
  styleUrls: ['./misery-score-modal.component.css']
})
export class MiseryScoreModalComponent implements OnInit {
  @Input() gameType: GameTypes;
  protected wins: PlayerActionEnum[];

  constructor(protected activeModal: NgbActiveModal, private gameService: GameService,
    private scoreCalc: ScoreCalculatorService, protected players: PlayerService) {
    this.wins = [];

    for (const player of this.players.getPlayers()) {
      this.wins.push(PlayerActionEnum.DidNotPlay);
    }
  }

  ngOnInit() {
  }

  public addAndClose(): void {
    this.gameService.scoreTable.addEntry(this.scoreCalc.calcMisery(this.wins, this.gameType), this.gameType);
    this.activeModal.close('Saved');
  }

  public inputIsValid(): boolean {
    for (const win of this.wins) {
      if (win !== PlayerActionEnum.DidNotPlay) {
        return true;
      }
    }

    return false;
  }

  get gameName(): string {
    if (this.gameType === GameTypes.Misery) {
      return 'Miserie';
    } else if (this.gameType === GameTypes.OpenMisery) {
      return 'Open Miserie';
    } else {
      throw new Error('Invalid gametype');
    }
  }
}
