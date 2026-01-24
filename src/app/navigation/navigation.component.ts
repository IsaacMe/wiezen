import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangePlayersModalComponent } from '../change-players-modal/change-players-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { GameService } from '../game.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    standalone: false
})
export class NavigationComponent {

  public isMenuCollapsed = true;

  constructor(private modalService: NgbModal, private gameService: GameService) { }

  startNewGame() {
    this.menuClicked();
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Nieuw spel starten?';
    modalRef.componentInstance.message = 'Alle huidige scores worden gewist. Dit kan niet ongedaan worden gemaakt.';
    modalRef.componentInstance.confirmText = 'Nieuw spel';
    modalRef.result.then(
      () => this.gameService.startNewGame(),
      () => { /* dismissed */ }
    );
  }

  undoLast() {
    this.menuClicked();
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Laatste ronde verwijderen?';
    modalRef.componentInstance.message = 'De laatst toegevoegde score wordt verwijderd.';
    modalRef.componentInstance.confirmText = 'Verwijderen';
    modalRef.result.then(
      () => this.gameService.scoreTable.removeLast(),
      () => { /* dismissed */ }
    );
  }

  openChangeNames() {
    this.menuClicked();
    this.modalService.open(ChangePlayersModalComponent);
  }

  menuClicked() {
    this.isMenuCollapsed = true;
  }

}
