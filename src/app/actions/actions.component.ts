import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PassingScoreModalComponent } from '../score-modals/passing-score-modal/passing-score-modal.component';
import { AbondanceScoreModalComponent } from '../score-modals/abondance-score-modal/abondance-score-modal.component';
import { GameTypes } from '../score/game-types.enum';
import { AskingAndJoiningScoreModalComponent } from '../score-modals/asking-and-joining-score-modal/asking-and-joining-score-modal.component';
import { AloneScoreModalComponent } from '../score-modals/alone-score-modal/alone-score-modal.component';
import { MiseryScoreModalComponent } from '../score-modals/misery-score-modal/misery-score-modal.component';

interface GameAction {
  label: string;
  action: () => void;
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
  standalone: false
})
export class ActionsComponent {
  gameActions: GameAction[] = [
    { label: 'Solo slim', action: () => this.openModal(GameTypes.SoloSlim, AbondanceScoreModalComponent) },
    { label: 'Solo', action: () => this.openModal(GameTypes.Solo, AbondanceScoreModalComponent) },
    { label: 'Open Miserie', action: () => this.openModal(GameTypes.OpenMisery, MiseryScoreModalComponent) },
    { label: 'Troel', action: () => this.openModal(GameTypes.Trull, AskingAndJoiningScoreModalComponent) },
    { label: 'Abondance 12', action: () => this.openModal(GameTypes.Abondance12, AbondanceScoreModalComponent) },
    { label: 'Abondance 11', action: () => this.openModal(GameTypes.Abondance11, AbondanceScoreModalComponent) },
    { label: 'Miserie', action: () => this.openModal(GameTypes.Misery, MiseryScoreModalComponent) },
    { label: 'Abondance 10', action: () => this.openModal(GameTypes.Abondance10, AbondanceScoreModalComponent) },
    { label: 'Abondance 9', action: () => this.openModal(GameTypes.Abondance9, AbondanceScoreModalComponent) },
    { label: 'Vraag en mee', action: () => this.openModal(GameTypes.AskingAndJoining, AskingAndJoiningScoreModalComponent) },
    { label: 'Alleen', action: () => this.openModal(GameTypes.Alone, AloneScoreModalComponent) },
    { label: 'Passpel', action: () => this.openModal(GameTypes.Passing, PassingScoreModalComponent) },
  ];

  constructor(private modalService: NgbModal) { }

  private openModal(gameType: GameTypes, modelCoponent: any) {
    const modalRef = this.modalService.open(modelCoponent, { size: 'lg' });
    modalRef.componentInstance.gameType = gameType;
  }
}
