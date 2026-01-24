import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-score-input',
    templateUrl: './score-input.component.html',
    styleUrls: ['./score-input.component.css'],
    standalone: false
})
export class ScoreInputComponent implements OnInit {
  private static uniqueIdCounter = 0;

  @Input() title: string = '';
  @Input() positiveScore: number | undefined = undefined;
  @Input() score: number;
  @Output() scoreChange = new EventEmitter<number>();

  values: number[] = [];
  scoreControl = new FormControl<number | null>(null);
  inputId = `score-input-${ScoreInputComponent.uniqueIdCounter++}`;

  ngOnInit() {
    this.scoreControl.setValue(this.score);
    this.generateValues(0, 13); // Generate values dynamically
    this.scoreControl.valueChanges.subscribe(value => {
      if (value !== null) {
        this.scoreChange.emit(value);
      }
    });
  }

  /**
   * Generate values for the radio group.
   * @param start The starting value.
   * @param end The ending value (inclusive).
   */
  generateValues(start: number, end: number): void {
    this.values = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  /**
   * Generate a unique ID for each radio button based on the value.
   * @param value The value associated with the radio button.
   * @returns A string ID.
   */
  generateId(value: number): string {
    return `${this.inputId}-${value}-test`;
  }

  /**
   * TrackBy function for the *ngFor directive to optimize rendering.
   * @param index The index of the item.
   * @param value The value of the item.
   * @returns The value itself.
   */
  trackByValue(index: number, value: number): number {
    return value;
  }
}
