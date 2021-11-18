import { Component, Input, OnInit } from '@angular/core';
import { IRepository } from '../../state/repository/repository.model';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {

  @Input() repository?: IRepository;

  constructor() { }

  ngOnInit(): void {
  }

}
