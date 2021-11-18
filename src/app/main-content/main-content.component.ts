import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PageEvent } from '@angular/material/paginator';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import {
  loadRepositoriesByQuery,
  paginate,
  setSelectedRepository,
  updateLanguageFilter
} from '../state/repository/repository.actions';
import { selectLoadingState } from '../state/app/app.selectors';
import { itemsPerPage, repositories, selectRepositoriesCount } from '../state/repository/repository.selectors';
import { IRepository } from '../state/repository/repository.model';
import { routerPaths } from '../app-routing.module';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private readonly store$: Store, private readonly router: Router) { }

  isLoading$ = this.store$.select(selectLoadingState);
  repositoriesCount$ = this.store$.select(selectRepositoriesCount);
  itemsPerPage$ = this.store$.select(itemsPerPage);
  repositories$ = this.store$.select(repositories);

  ngOnInit(): void {
    this.store$.dispatch(loadRepositoriesByQuery({ query: 'Angular' }));
  }

  onSearchQueryChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value.trim().length === 0) {
      return;
    }
    this.store$.dispatch(loadRepositoriesByQuery({ query: value }));
  }

  onPageChange(event: PageEvent) {
    this.store$.dispatch(paginate({ itemsPerPage: event.pageSize, currentPageIndex: event.pageIndex + 1 }));
  }

  onFilterChange(event: MatButtonToggleChange) {
    this.store$.dispatch(updateLanguageFilter( { allowedLanguages: event.value }));
  }

  onSelectRepository(repository: IRepository) {
    this.store$.dispatch(setSelectedRepository({name: repository.full_name}));
    this.router.navigate([routerPaths.repository]);
  }
}
