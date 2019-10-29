import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PlayerActionEnum } from '../../score/player-action.enum';

@Component({
  selector: 'app-win-lose-dnp-input',
  templateUrl: './win-lose-dnp-input.component.html',
  styleUrls: ['./win-lose-dnp-input.component.css']
})
export class WinLoseDnpInputComponent implements OnInit {

  public WinLoseDnp = PlayerActionEnum;

  @Input() title: string;
  private winValue: PlayerActionEnum;

  @Output() winChange = new EventEmitter();

  @Input()
  get win(): PlayerActionEnum {
    return this.winValue;
  }

  set win(val: PlayerActionEnum) {
    this.winValue = val;
    this.winChange.emit(this.winValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
