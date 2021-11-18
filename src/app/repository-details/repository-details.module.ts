import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { RepositoryDetailsComponent } from './repository-details.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    RepositoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    MatListModule,
  ],
  providers: [],
})
export class RepositoryDetailsModule { }
