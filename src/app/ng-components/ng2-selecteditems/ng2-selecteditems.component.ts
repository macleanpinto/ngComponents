import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng2-selecteditems',
  template: `
  <div style="border: 1px solid gray; width: 15em; height: 5em; overflow-y: scroll;">
    <div class="btn-group" role="group"  *ngFor="let data of selectedItems; let i=index;">
    <button type="button" class="btn btn-secondary btn-sm" (click)=onDelete(i)>{{data}}<a class="close" style="margin-left: 5px; padding: 0;">×</a></button>
    </div>
</div>`
})
export class Ng2SelecteditemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() private selectedItems: String[];

  private onDelete(index) {
    this.selectedItems.splice(index, 1);
  }
}
