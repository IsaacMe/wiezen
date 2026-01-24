import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-win-lose-input',
    templateUrl: './win-lose-input.component.html',
    styleUrls: ['./win-lose-input.component.css'],
    standalone: false
})
export class WinLoseInputComponent implements OnInit {
  private static uniqueIdCounter = 0;

  @Input() title: string = '';
  @Input() win: boolean;
  @Output() winChange = new EventEmitter<boolean>();

  inputId = `win-lose-${WinLoseInputComponent.uniqueIdCounter++}`;
  winControl = new FormControl<boolean | null>(null);

  ngOnInit(): void {
    this.winControl.setValue(this.win);
    this.winControl.valueChanges.subscribe((value) => {
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
  generateId(value: boolean): string {
    return `${this.inputId}-${value}`;
  }
}
