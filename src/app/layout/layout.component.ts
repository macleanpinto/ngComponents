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
    this.items.push({ label: 'Categories' });
    this.items.push({ label: 'Sports' });
    this.items.push({ label: 'Football' });
    this.items.push({ label: 'Countries' });
    this.items.push({ label: 'Spain' });
    this.items.push({ label: 'F.C. Barcelona' });
    this.items.push({ label: 'Squad' });
    this.items.push({ label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' });
  }

}
