import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.css'],
    standalone: false
})
export class ConfirmModalComponent {
  @Input() title = 'Bevestigen';
  @Input() message = 'Weet je het zeker?';
  @Input() confirmText = 'Bevestigen';
  @Input() cancelText = 'Annuleren';

  constructor(public activeModal: NgbActiveModal) { }

  confirm() {
    this.activeModal.close(true);
  }

  cancel() {
    this.activeModal.dismiss(false);
  }
}
