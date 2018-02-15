import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {GameService} from '../game.service';

@Component({
  selector: 'app-score-graph',
  templateUrl: './score-graph.component.html',
  styleUrls: ['./score-graph.component.css']
})
export class ScoreGraphComponent implements OnInit {

  @ViewChild("chart") private chartElem : ElementRef;
  private chart: Chart;
  private datasets;
  private colors = ["rgb(52, 152, 219)", "rgb(231, 76, 60)", "rgb(46, 204, 113)", "rgb(241, 196, 15)"];
  private labels: string[];
  private numOfGames = 0;

  constructor(protected game: GameService) {
    this.datasets = [];
    this.labels = [];
  }

  ngOnInit() {

    //this.datasets = [{data: [0, 1, 2]}];

    this.chart = new Chart(this.chartElem.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        datasets: this.datasets,
        labels: this.labels
      },
      options: {
        elements: {
          line: {
            fill: false
          }
        }
      }
    });

    this.game.scoreTable.getObservableSize().subscribe((size) => {
      this.numOfGames = size;
      this.updateData();
      this.chart.data.datasets = this.datasets;
      this.chart.data.labels = this.labels;
      this.chart.update();
    });
  }

  private updateData(): void {
    this.datasets = this.getCumulativeChartData();
    this.labels = this.getLabels();
  }

  private getCumulativeChartData() {
    return this.game.scoreTable.getCumulativePlayers().map((val, index) => ({
      label: 'Speler ' + (index + 1),
      data: val,
      borderColor: this.colors[index],
      backgroundColor: this.colors[index]
    }));
  }

  private getLabels(): string[] {
    return Array.from({length: this.numOfGames}, (v, k) => 'Ronde ' + k);
  }

}
