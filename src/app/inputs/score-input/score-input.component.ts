import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.css']
})
export class ScoreInputComponent implements OnInit {

  private scoreValue: number;
  protected values: number[] = [];

  @Output() scoreChange = new EventEmitter();

  @Input() title: string;

  @Input()
  get score(): number {
    return this.scoreValue;
  }

  set score(val: number) {
    this.scoreValue = val;
    this.scoreChange.emit(this.scoreValue);
  }

  constructor() {
    for (let i = 0; i <= 13; ++i) {
      this.values.push(i);
    }
  }

  ngOnInit() {
  }

}
