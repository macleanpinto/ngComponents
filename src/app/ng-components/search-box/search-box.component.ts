import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-searchBox',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input() private placeHolder: String;
  @Output() private search = new EventEmitter();
  private seachText: String;
  constructor() { }

  private onClick($event) {
    this.search.emit({ searchText: this.seachText });
  }
  ngOnInit() {
  }

}
