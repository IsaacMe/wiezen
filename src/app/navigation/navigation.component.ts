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

  constructor(private modalService: NgbModal, private gameService: GameService) { }

  ngOnInit() {
  }

  startNewGame() {
    this.gameService.startNewGame();
  }

  openChangeNames() {
    const modalRef = this.modalService.open(ChangePlayersModalComponent);
  }

}
