import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-change-players-modal',
  templateUrl: './change-players-modal.component.html',
  styleUrls: ['./change-players-modal.component.css']
})
export class ChangePlayersModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, public players: PlayerService) { }

  ngOnInit() {
  }

  public numberOfPlayersRange(): [number] {
    return Array.apply(null, {length: this.players.getNumberOfPlayers()}).map(Number.call, Number);
  }

}
