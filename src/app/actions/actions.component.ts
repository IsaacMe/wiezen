import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PassingScoreModalComponent} from '../score-modals/passing-score-modal/passing-score-modal.component';
import {AbondanceScoreModalComponent} from '../score-modals/abondance-score-modal/abondance-score-modal.component';
import {GameTypes} from '../score/game-types.enum';
import {AskingAndJoiningScoreModalComponent} from '../score-modals/asking-and-joining-score-modal/asking-and-joining-score-modal.component';
import {AloneScoreModalComponent} from '../score-modals/alone-score-modal/alone-score-modal.component';
import { MiseryScoreModalComponent } from '../score-modals/misery-score-modal/misery-score-modal.component';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.css'],
    standalone: false
})
export class ActionsComponent implements OnInit {

  public GameTypes = GameTypes;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public openPassing() {
    const modalRef = this.modalService.open(PassingScoreModalComponent, {size: 'lg'});
  }

  public openAbondance(gameType: GameTypes) {
    const modalRef = this.modalService.open(AbondanceScoreModalComponent, {size: 'lg'});
    modalRef.componentInstance.gameType = gameType;
  }

  public openAskingAndJoining() {
    const modalRef = this.modalService.open(AskingAndJoiningScoreModalComponent, {size: 'lg'});
    modalRef.componentInstance.gameType = GameTypes.AskingAndJoining;
  }

  public openTrull() {
    const modalRef = this.modalService.open(AskingAndJoiningScoreModalComponent, {size: 'lg'});
    modalRef.componentInstance.gameType = GameTypes.Trull;
  }

  public openAlone() {
    const modalRef = this.modalService.open(AloneScoreModalComponent, {size: 'lg'});
  }

  public openMisery(gameType: GameTypes) {
    const modalRef = this.modalService.open(MiseryScoreModalComponent, {size: 'lg'});
    modalRef.componentInstance.gameType = gameType;
  }

}
