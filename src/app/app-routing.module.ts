import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

const mainRoute = {path: 'main', component: MainContentComponent};
const invalidRoute = {path: '**', component: MainContentComponent};

const routes: Routes = [
  mainRoute,
  invalidRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
