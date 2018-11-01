import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-win-lose-input',
  templateUrl: './win-lose-input.component.html',
  styleUrls: ['./win-lose-input.component.css']
})
export class WinLoseInputComponent implements OnInit {

  @Input() title: string;
  private winValue : boolean;

  @Output() winChange = new EventEmitter();

  @Input()
  get win(): boolean {
    return this.winValue;
  }

  set win(val: boolean) {
    this.winValue = val;
    this.winChange.emit(this.winValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
