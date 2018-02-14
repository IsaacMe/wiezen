import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PassingScoreModalComponent} from '../score-modals/passing-score-modal/passing-score-modal.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public openPassing() {
    const modalRef = this.modalService.open(PassingScoreModalComponent);
  }

}
