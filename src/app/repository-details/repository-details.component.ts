import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectedRepositoryDetails } from '../state/repository/repository.selectors';
import { loadRepositoryDetails } from '../state/repository/repository.actions';
import { IRepositoryDetail } from '../state/repository/repository.model';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  constructor(private readonly store$: Store) { }

  selectedRepositoryDetails: IRepositoryDetail | undefined;


  ngOnInit(): void {
    this.store$.dispatch(loadRepositoryDetails());
    this.subscriptions = [
      this.store$.select(selectedRepositoryDetails).subscribe(repositoryDetails => {
        this.selectedRepositoryDetails = repositoryDetails;
      })
    ]
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
