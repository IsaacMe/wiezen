import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayerService} from '../../player.service';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css']
})
export class PlayerInputComponent implements OnInit {

  @Input() title: string;
  @Input() disablePlayer: number;
  @Output() playerChange = new EventEmitter();

  private selectedPlayer: number;

  constructor(protected players: PlayerService) { }

  ngOnInit() {
  }

  @Input()
  get player(): number {
    return this.selectedPlayer;
  }

  set player(val: number) {
    this.selectedPlayer = val;
    this.playerChange.emit(this.selectedPlayer);
  }


}
