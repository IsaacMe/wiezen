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
    { label: 'Solo slim', action: () => this.openAbondance(GameTypes.SoloSlim) },
    { label: 'Solo', action: () => this.openAbondance(GameTypes.Solo) },
    { label: 'Open Miserie', action: () => this.openMisery(GameTypes.OpenMisery) },
    { label: 'Troel', action: () => this.openTrull() },
    { label: 'Abondance 12', action: () => this.openAbondance(GameTypes.Abondance12) },
    { label: 'Abondance 11', action: () => this.openAbondance(GameTypes.Abondance11) },
    { label: 'Miserie', action: () => this.openMisery(GameTypes.Misery) },
    { label: 'Abondance 10', action: () => this.openAbondance(GameTypes.Abondance10) },
    { label: 'Abondance 9', action: () => this.openAbondance(GameTypes.Abondance9) },
    { label: 'Vraag en mee', action: () => this.openAskingAndJoining() },
    { label: 'Alleen', action: () => this.openAlone() },
    { label: 'Passpel', action: () => this.openPassing() },
  ];

  constructor(private modalService: NgbModal) { }

  private openPassing(): void {
    this.modalService.open(PassingScoreModalComponent, { size: 'lg' });
  }

  private openAbondance(gameType: GameTypes): void {
    const modalRef = this.modalService.open(AbondanceScoreModalComponent, { size: 'lg' });
    modalRef.componentInstance.gameType = gameType;
  }

  private openAskingAndJoining(): void {
    const modalRef = this.modalService.open(AskingAndJoiningScoreModalComponent, { size: 'lg' });
    modalRef.componentInstance.gameType = GameTypes.AskingAndJoining;
  }

  private openTrull(): void {
    const modalRef = this.modalService.open(AskingAndJoiningScoreModalComponent, { size: 'lg' });
    modalRef.componentInstance.gameType = GameTypes.Trull;
  }

  private openAlone(): void {
    this.modalService.open(AloneScoreModalComponent, { size: 'lg' });
  }

  private openMisery(gameType: GameTypes): void {
    const modalRef = this.modalService.open(MiseryScoreModalComponent, { size: 'lg' });
    modalRef.componentInstance.gameType = gameType;
  }
}
