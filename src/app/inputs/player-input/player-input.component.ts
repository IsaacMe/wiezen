import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayerService} from '../../player.service';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css']
})
export class PlayerInputComponent implements OnInit {

  private selectedPlayer : number;

  constructor(protected players: PlayerService) { }

  ngOnInit() {
  }

  @Input() title: string;
  @Input()
  get player(): number {
    return this.selectedPlayer;
  }
  @Output() playerChange = new EventEmitter();

  set player(val: number) {
    this.selectedPlayer = val;
    this.playerChange.emit(this.selectedPlayer);
  }


}
