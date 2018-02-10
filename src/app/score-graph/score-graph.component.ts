import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-score-graph',
  templateUrl: './score-graph.component.html',
  styleUrls: ['./score-graph.component.css']
})
export class ScoreGraphComponent implements OnInit {

  @ViewChild("chart") private chartElem : ElementRef;
  private chart: Chart;

  constructor() {

  }

  ngOnInit() {
    let data = {
      datasets: [
        {
          data: [20, 10]
        }
      ]
    };
    this.chart = new Chart(this.chartElem.nativeElement.getContext('2d'), {
      type: 'line',
      data: data
    });
  }

}
