import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  private items: any[];

  ngOnInit() {
    this.items = [];
    this.items.push({ label: 'AgGrid', url: "aggridBreadcrumb" });
    this.items.push({ label: 'Search', url: "searchBreadcrumb" });
  }
  private onSearch(searchText: String) {
    console.log(searchText);
  }

}
