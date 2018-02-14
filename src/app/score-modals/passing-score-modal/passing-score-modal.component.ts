import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GameService} from '../../game.service';
import {Scores} from '../../score/scores';
import {GameTypes} from '../../score/game-types.enum';

@Component({
  selector: 'app-passing-score-modal',
  templateUrl: './passing-score-modal.component.html',
  styleUrls: ['./passing-score-modal.component.css']
})
export class PassingScoreModalComponent implements OnInit {

  constructor(protected activeModal: NgbActiveModal, private gameService: GameService) { }

  ngOnInit() {
  }

  public add() {
    this.gameService.scoreTable.addEntry(new Scores(0.2, 0.1, -0.1, -0.2), GameTypes.Passing);
  }

}
