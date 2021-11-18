import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { IState, reducers } from './state.model';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from "@ngrx/effects";
import { RepositoryEffects } from "./repository/repository.effects";

@NgModule({
  imports: [
    StoreModule.forRoot<IState>(reducers),
    EffectsModule.forRoot([
      RepositoryEffects
    ]),
    StoreDevtoolsModule.instrument({
      name: 'Github search',
      logOnly: environment.reduxDevTools,
      maxAge: 10,
    }),
  ],
})
export class StateModule {}
