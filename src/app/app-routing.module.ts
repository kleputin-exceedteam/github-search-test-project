import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';

export enum routerPaths {
  main = 'main',
  repository = 'repository'
}
const mainRoute = {path: routerPaths.main, component: MainContentComponent};
const repositoryDetails = {path: routerPaths.repository, component: RepositoryDetailsComponent}
const invalidRoute = {path: '**', redirectTo: '/main'};

const routes: Routes = [
  mainRoute,
  repositoryDetails,
  invalidRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
