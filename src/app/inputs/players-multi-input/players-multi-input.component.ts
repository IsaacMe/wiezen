import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerService } from '../../player.service';

@Component({
    selector: 'app-players-multi-input',
    templateUrl: './players-multi-input.component.html',
    styleUrls: ['./players-multi-input.component.css'],
    standalone: false
})
export class PlayersMultiInputComponent implements OnInit {
  private static uniqueIdCounter = 0;

  @Input() title: string = 'Spelers';
  @Input() requiredCount: number = 2;
  @Input() selectedPlayers: number[] = [];
  @Output() selectedPlayersChange = new EventEmitter<number[]>();

  playersList: string[] = [];
  inputId = `players-multi-input-${PlayersMultiInputComponent.uniqueIdCounter++}`;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playersList = this.playerService.getPlayers();
  }

  isSelected(playerIndex: number): boolean {
    return this.selectedPlayers.includes(playerIndex);
  }

  togglePlayer(playerIndex: number): void {
    const currentSelection = [...this.selectedPlayers];
    const existingIndex = currentSelection.indexOf(playerIndex);

    if (existingIndex > -1) {
      // Deselect
      currentSelection.splice(existingIndex, 1);
    } else if (currentSelection.length < this.requiredCount) {
      // Select if we haven't reached the limit
      currentSelection.push(playerIndex);
    } else {
      // Replace the first selected player with the new one
      currentSelection.shift();
      currentSelection.push(playerIndex);
    }

    this.selectedPlayers = currentSelection;
    this.selectedPlayersChange.emit(this.selectedPlayers);
  }

  isValid(): boolean {
    return this.selectedPlayers.length === this.requiredCount;
  }
}
