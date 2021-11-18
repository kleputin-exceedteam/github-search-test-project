import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContentComponent } from './main-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { RepositoryApiService } from '../api/repository-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressBarModule
  ],
  exports: [
    MainContentComponent
  ],
  providers: [
    RepositoryApiService
  ],
})
export class MainContentModule { }
