import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css']
})
export class PlayerInputComponent implements OnInit {
  private static uniqueIdCounter = 0;

  @Input() title: string = '';
  @Input() disablePlayer: number | null = null;
  @Input() player: number;
  @Output() playerChange = new EventEmitter<number>();

  playersList: string[] = [];
  playerControl = new FormControl<number | null>(null);
  inputId = `player-input-${PlayerInputComponent.uniqueIdCounter++}`;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerControl.setValue(this.player)
    this.playersList = this.playerService.getPlayers();
    this.playerControl.valueChanges.subscribe(value => {
      if (value !== null) {
        this.playerChange.emit(value);
      }
    });
  }

  trackByIndex(index: number): number {
    return index;
  }
}
