import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangePlayersModalComponent } from '../change-players-modal/change-players-modal.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(private modalService: NgbModal, private gameService: GameService) { }

  ngOnInit() {
  }

  startNewGame() {
    this.menuClicked();
    this.gameService.startNewGame();
  }

  undoLast() {
    this.gameService.scoreTable.removeLast();
  }

  openChangeNames() {
    this.menuClicked();
    const modalRef = this.modalService.open(ChangePlayersModalComponent);
  }

  menuClicked() {
    this.isMenuCollapsed = true;
  }

}
