import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlayerActionEnum } from '../../score/player-action.enum';

@Component({
  selector: 'app-win-lose-dnp-input',
  templateUrl: './win-lose-dnp-input.component.html',
  styleUrls: ['./win-lose-dnp-input.component.css']
})
export class WinLoseDnpInputComponent implements OnInit {
  private static uniqueIdCounter = 0;

  @Input() title: string = '';
  @Input() win: PlayerActionEnum;
  @Output() winChange = new EventEmitter<PlayerActionEnum>();

  public WinLoseDnp = PlayerActionEnum;
  inputId = `win-lose-dnp-${WinLoseDnpInputComponent.uniqueIdCounter++}`;
  winControl = new FormControl<PlayerActionEnum | null>(null);

  ngOnInit(): void {
    this.winControl.setValue(this.win);
    this.winControl.valueChanges.subscribe(value => {
      if (value !== null) {
        this.winChange.emit(value);
      }
    });
  }

  /**
   * Generate a unique ID for each input element.
   * @param value The value associated with the radio button.
   * @returns A unique string ID.
   */
  generateId(value: PlayerActionEnum): string {
    return `${this.inputId}-${value}`;
  }
}
