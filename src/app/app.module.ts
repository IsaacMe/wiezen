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


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChangePlayersModalComponent,
    ActionsComponent,
    ScoreGraphComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent],
  entryComponents: [ChangePlayersModalComponent]
})
export class AppModule { }
