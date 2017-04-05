import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";
import { GridOptions } from "ag-grid/main";
import ProficiencyFilter from '../filters/proficiencyFilter';
import SkillFilter from '../filters/skillFilter';
import RefData from '../data/refData';
import { GlyphiconButtonComponent } from '../glyphicon-button/glyphicon-button.component';
import { HeaderGroupComponent } from "../header-group-component/header-group.component";
import { DateComponent } from "../date-component/date.component";
import { HeaderComponent } from "../header-component/header.component";
import { AgreementSearchService } from './agreement-search.service';
import { AgreementSearchGridMap } from './agreement-search-grid-map.component';

@Component({
  selector: 'agreement-search-grid',
  templateUrl: './agreement-search-grid.component.html',
  styleUrls: ['./agreement-search-grid.component.css']
})
export class AgreementSearchGridComponent implements OnInit {

  private gridOptions: GridOptions;
  private showGrid: boolean;
  private rowData: any[];
  private columnDefs: any[];
  private rowCount: string;
  private dateComponentFramework: DateComponent;
  private HeaderGroupComponent = HeaderGroupComponent;
  public defaultPazeSize = 10;
  private agreementMap: AgreementSearchGridMap;
  private gridHeader = [];
  private startRow;
  private newDataSource;

  constructor(private _agreementSearchServices: AgreementSearchService) {
  }

  ngOnInit() {
    //  this._agreementSearchServices.getAgreementSearchGridHeader().subscribe(agreementSearchHeader => this.agreementMap = agreementSearchHeader);  
    //   console.log(this.agreementMap);
    this.gridHeader = [
      {
        headerName: 'Co',
        field: 'co'
      },
      {
        headerName: 'Vendor ID',
        field: 'vendorId'

      },
      {
        headerName: 'Vendor Name',
        field: 'vendorName'

      },
      {
        headerName: 'Agreement ID',
        field: 'agreementId'

      },
      {
        headerName: 'Agreement Name',
        field: 'agreementName'

      },
      {
        headerName: 'Negotiation Owner',
        field: 'negoOwner'

      },
      {
        headerName: 'Business Owner',
        field: 'businessOwner'

      },
      {
        headerName: 'Negotiation Group Major',
        field: 'negoGrpMajor'

      },
      {
        headerName: 'Start',
        field: 'start'

      },
      {
        headerName: 'End',
        field: 'end'
      },
      {
        headerName: 'Status',
        field: 'status'
      }
    ];

    this.gridOptions = <GridOptions>{};
    this.createRowData();
    this.createColumnDefs();
    this.showGrid = true;
    this.gridOptions.dateComponentFramework = DateComponent;
    this.gridOptions.defaultColDef = {
      headerComponentFramework: <{ new (): HeaderComponent }>HeaderComponent,
      headerComponentParams: {
        menuIcon: 'fa-bars'
      }
    }
    this.gridOptions.paginationPageSize = this.defaultPazeSize;
  //  this.gridOptions.datasource = this.dataSource;
  }

  private createRowData() {

  }

  private searchAgreements(){
    this.newDataSource = {
    suppressPaginationPanel : false,
    paginationPageSize: 1,
    overflowSize: 100,
    

    getRows: (params: any) => {
      this._agreementSearchServices.getAgreementSearchGridHeader()
        .subscribe(rowData => {
          this.rowData = rowData;
          var rowsThisPage = rowData.slice(params.startRow, params.endRow);
          this.startRow = params.startRow;
          var lastRow = -1;
          params.successCallback(rowsThisPage, lastRow);
        });
    }
  }

  this.gridOptions.api.setDatasource(this.newDataSource);
 // this.gridOptions.datasource = this.newDataSource;

  }

  dataSource = {
    suppressPaginationPanel : false,
    paginationPageSize: 1,
    overflowSize: 100,
    

    getRows: (params: any) => {
      this._agreementSearchServices.getAgreementSearchGridHeader()
        .subscribe(rowData => {
          this.rowData = rowData;
          var rowsThisPage = rowData.slice(params.startRow, params.endRow);
          this.startRow = params.startRow;
          var lastRow = -1;
          params.successCallback(rowsThisPage, lastRow);
        });
    }
  }

  public deleteSelected() {
    let selectedNodes = this.gridOptions.api.getSelectedNodes();
    this.gridOptions.api.removeItems(selectedNodes);
  }
  public onPageSizeChanged($event) {
    this.gridOptions.paginationPageSize = $event.target.value;
    this.gridOptions.api.setDatasource(this.dataSource);
  }
  private createColumnDefs() {
    this.columnDefs = this.gridHeader;
  }

  private calculateRowCount() {
    if (this.gridOptions.api && this.rowData) {
      var model = this.gridOptions.api.getModel();
      var totalRows = this.rowData.length;
      var processedRows = model.getRowCount() + this.startRow;
      this.rowCount = (this.startRow + 1) + "-" + processedRows.toLocaleString() + ' of ' + totalRows.toLocaleString();
    }
  }

  private onModelUpdated() {
    console.log('onModelUpdated');
    this.calculateRowCount();
  }

  private onReady() {
    console.log('onReady');
    this.calculateRowCount();
  }

  private onCellClicked($event) {
    console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
  }

  private onCellValueChanged($event) {
    console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
  }

  private onCellDoubleClicked($event) {
    console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
  }

  private onCellContextMenu($event) {
    console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
  }

  private onCellFocused($event) {
    console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
  }

  private onRowSelected($event) {
    // taking out, as when we 'select all', it prints to much to the console!!
    // console.log('onRowSelected: ' + $event.node.data.name);
  }

  private onSelectionChanged() {
    console.log('selectionChanged');
  }

  private onBeforeFilterChanged() {
    console.log('beforeFilterChanged');
  }

  private onAfterFilterChanged() {
    console.log('afterFilterChanged');
  }

  private onFilterModified() {
    console.log('onFilterModified');
  }

  private onBeforeSortChanged() {
    console.log('onBeforeSortChanged');
  }

  private onAfterSortChanged() {
    console.log('onAfterSortChanged');
  }

  private onVirtualRowRemoved($event) {
    // because this event gets fired LOTS of times, we don't print it to the
    // console. if you want to see it, just uncomment out this line
    // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
  }

  private onRowClicked($event) {
    console.log('onRowClicked: ' + $event.node.data.name);
  }

  public onQuickFilterChanged($event) {
    this.gridOptions.api.setQuickFilter($event.target.value);
  }

  // here we use one generic event to handle all the column type events.
  // the method just prints the event name
  private onColumnEvent($event) {
    console.log('onColumnEvent: ' + $event);
  }

}
//Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
  let asString = num + "";
  while (asString.length < totalStringSize) asString = "0" + asString;
  return asString;
}


