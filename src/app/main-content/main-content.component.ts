import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRepositoriesByQuery } from "../state/repository/repository.actions";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private readonly store$: Store) { }

  ngOnInit(): void {
  }

  onSearchQueryChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value.trim().length === 0) {
      return;
    }
    this.store$.dispatch(loadRepositoriesByQuery({ query: value }));
  }

}
