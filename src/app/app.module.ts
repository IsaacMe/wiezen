import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ChangePlayersModalComponent } from './change-players-modal/change-players-modal.component';
import {PlayerService} from './player.service';
import {FormsModule} from '@angular/forms';
import { ActionsComponent } from './actions/actions.component';
import { ScoreGraphComponent } from './score-graph/score-graph.component';
import {GameService} from './game.service';
import { PassingScoreModalComponent } from './score-modals/passing-score-modal/passing-score-modal.component';
import { ScoreInputComponent } from './inputs/score-input/score-input.component';
import {PointsService} from './points.service';
import {ScoreCalculatorService} from './score-calculator.service';
import { AbondanceScoreModalComponent } from './score-modals/abondance-score-modal/abondance-score-modal.component';
import { PlayerInputComponent } from './inputs/player-input/player-input.component';
import { WinLoseInputComponent } from './inputs/win-lose-input/win-lose-input.component';
import { AskingAndJoiningScoreModalComponent } from './score-modals/asking-and-joining-score-modal/asking-and-joining-score-modal.component';
import { AloneScoreModalComponent } from './score-modals/alone-score-modal/alone-score-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChangePlayersModalComponent,
    ActionsComponent,
    ScoreGraphComponent,
    PassingScoreModalComponent,
    ScoreInputComponent,
    AbondanceScoreModalComponent,
    PlayerInputComponent,
    WinLoseInputComponent,
    AskingAndJoiningScoreModalComponent,
    AloneScoreModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [PlayerService, GameService, PointsService, ScoreCalculatorService],
  bootstrap: [AppComponent],
  entryComponents: [ChangePlayersModalComponent, PassingScoreModalComponent, AbondanceScoreModalComponent, AskingAndJoiningScoreModalComponent, AloneScoreModalComponent]
})
export class AppModule { }
