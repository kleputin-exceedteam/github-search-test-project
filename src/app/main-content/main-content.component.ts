import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageEvent } from '@angular/material/paginator';
import { loadRepositoriesByQuery, updatePaginator } from '../state/repository/repository.actions';
import { selectLoadingState } from '../state/app/app.selectors';
import { itemsPerPage, selectRepositoriesCount } from '../state/repository/repository.selectors';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private readonly store$: Store) { }

  isLoading$ = this.store$.select(selectLoadingState);
  repositoriesCount$ = this.store$.select(selectRepositoriesCount);
  itemsPerPage$ = this.store$.select(itemsPerPage);

  ngOnInit(): void {
  }

  onSearchQueryChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value.trim().length === 0) {
      return;
    }
    this.store$.dispatch(loadRepositoriesByQuery({ query: value }));
  }

  onPageChange(event: PageEvent) {
    this.store$.dispatch(updatePaginator({ itemsPerPage: event.pageSize, currentPageIndex: event.pageIndex }));
  }

}
