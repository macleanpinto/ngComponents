import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private items: any[];

  ngOnInit() {
    this.items = [];
    this.items.push({ label: 'AgGrid', url: "aggrid" });
    this.items.push({ label: 'Search', url: "search" });
  }
}
