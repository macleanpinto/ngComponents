import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular/main";

@Component({
  selector: 'app-glyphicon-button',
  templateUrl: './glyphicon-button.component.html',
  styleUrls: ['./glyphicon-button.component.css']
})
export class GlyphiconButtonComponent implements OnInit, ICellRendererAngularComp {

  constructor() { }

  ngOnInit() {
  }
  public params: any;

  agInit(params: any): void {
    this.params = params;
    console.log(this.params);
  }

  public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
  }
}
