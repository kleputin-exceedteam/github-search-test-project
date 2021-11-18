import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentModule } from './main-content/main-content.module';
import { StateModule } from './state/state.module';
import { RepositoryDetailsModule } from './repository-details/repository-details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StateModule,
    MainContentModule,
    RepositoryDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
