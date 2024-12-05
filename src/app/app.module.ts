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
// tslint:disable-next-line:max-line-length
import { AskingAndJoiningScoreModalComponent } from './score-modals/asking-and-joining-score-modal/asking-and-joining-score-modal.component';
import { AloneScoreModalComponent } from './score-modals/alone-score-modal/alone-score-modal.component';
import { MiseryScoreModalComponent } from './score-modals/misery-score-modal/misery-score-modal.component';
import { WinLoseDnpInputComponent } from './inputs/win-lose-dnp-input/win-lose-dnp-input.component';
import { ScoreCurrentTableComponent } from './score-current-table/score-current-table.component';


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
        WinLoseDnpInputComponent,
        AskingAndJoiningScoreModalComponent,
        AloneScoreModalComponent,
        MiseryScoreModalComponent,
        ScoreCurrentTableComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule
    ],
    providers: [PlayerService, GameService, PointsService, ScoreCalculatorService],
    bootstrap: [AppComponent]
})
export class AppModule { }
