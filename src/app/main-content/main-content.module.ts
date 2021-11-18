import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContentComponent } from './main-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  exports: [
    MainContentComponent
  ],
  providers: [],
})
export class MainContentModule { }
