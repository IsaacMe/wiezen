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


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChangePlayersModalComponent,
    ActionsComponent,
    ScoreGraphComponent,
    PassingScoreModalComponent,
    ScoreInputComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [PlayerService, GameService, PointsService, ScoreCalculatorService],
  bootstrap: [AppComponent],
  entryComponents: [ChangePlayersModalComponent, PassingScoreModalComponent]
})
export class AppModule { }
