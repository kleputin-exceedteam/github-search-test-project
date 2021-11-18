import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearchQueryChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value.trim().length === 0) {
      return;
    }
    console.log(value);
  }

}
