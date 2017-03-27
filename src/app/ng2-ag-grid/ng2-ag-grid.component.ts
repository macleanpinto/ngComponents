import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid/main";

import ProficiencyFilter from '../filters/proficiencyFilter';
import SkillFilter from '../filters/skillFilter';
import RefData from '../data/refData';


import { GlyphiconButtonComponent } from '../glyphicon-button/glyphicon-button.component';

import { HeaderGroupComponent } from "../header-group-component/header-group.component";
import { DateComponent } from "../date-component/date.component";
import { HeaderComponent } from "../header-component/header.component";

@Component({
  selector: 'ng2-ag-grid',
  templateUrl: './ng2-ag-grid.component.html',
  styleUrls: ['./ng2-ag-grid.component.css']
})
export class Ng2AgGridComponent implements OnInit {

  private gridOptions: GridOptions;
  public showGrid: boolean;
  public rowData: any[];
  private columnDefs: any[];
  public rowCount: string;
  public dateComponentFramework: DateComponent;
  public HeaderGroupComponent = HeaderGroupComponent;

  ngOnInit() {
  }

  constructor() {
    // we pass an empty gridOptions in, so we can grab the api out
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
    this.gridOptions.datasource = this.dataSource;
  }

  private createRowData() {
    var rowData: any[] = [];

    for (var i = 0; i < 200; i++) {
      var countryData = RefData.countries[i % RefData.countries.length];
      rowData.push({
        oc: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
        vl: {
          android: Math.random() < 0.4,
          html5: Math.random() < 0.4,
          mac: Math.random() < 0.4,
          windows: Math.random() < 0.4,
          css: Math.random() < 0.4
        },
        attrType: RefData.DOBs[i % RefData.DOBs.length],
        attrValue: RefData.addresses[i % RefData.addresses.length],
        rate: Math.round(Math.random() * 100),
        calcModel: Math.round(Math.random() * 100),
        start: countryData.country,
        end: countryData.continent,
        comments: countryData.language,
        actions: createRandomPhoneNumber()
      });
    }

    this.rowData = rowData;
  }
  dataSource = {
    //rowCount : -1,
    paginationPageSize: 1,
    overflowSize: 100,

    getRows: (params: any) => {
      console.log(params)
      var rowData: any[] = [];

      for (var i = 0; i < 200; i++) {
        var countryData = RefData.countries[i % RefData.countries.length];
        rowData.push({
          oc: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
          vl: Math.random() < 0.4,
          attrType: RefData.DOBs[i % RefData.DOBs.length],
          attrValue: RefData.addresses[i % RefData.addresses.length],
          rate: Math.round(Math.random() * 100),
          calcModel: Math.round(Math.random() * 100),
          start: countryData.country,
          end: countryData.continent,
          comments: countryData.language,
          actions: createRandomPhoneNumber()
        });
      }

      this.rowData = rowData;
      var rowsThisPage = rowData.slice(params.startRow, params.endRow);
      console.log(rowsThisPage)
      var lastRow = -1;
      params.successCallback(rowsThisPage, lastRow);
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
    this.columnDefs = [
      {
        headerName: 'OC',
        field: 'oc'

      },
      {
        headerName: 'VL',
        field: 'vl'

      },
      {
        headerName: "Attribute Type",
        field: 'attrType'

      },
      {
        headerName: "Attribute Value - Name",
        field: 'attrValue'

      },
      {
        headerName: 'Rate',
        field: 'rate'

      },
      {
        headerName: 'Calc Model',
        field: 'calcModel'

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
        headerName: 'Comments',
        field: 'comments'

      },
      {
        headerName: 'Actions',
        field: 'actions',
        cellRendererFramework: GlyphiconButtonComponent,

      }
    ];
  }

  private calculateRowCount() {
    if (this.gridOptions.api && this.rowData) {
      var model = this.gridOptions.api.getModel();
      var totalRows = this.rowData.length;
      var processedRows = model.getRowCount();
      this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
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

function skillsCellRenderer(params) {
  var data = params.data;
  var skills = [];
  RefData.IT_SKILLS.forEach(function (skill) {
    if (data && data.skills && data.skills[skill]) {
      skills.push('<img src="images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
    }
  });
  return skills.join(' ');
}

function countryCellRenderer(params) {
  var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
  return flag + " " + params.value;
}

function createRandomPhoneNumber() {
  var result = '+';
  for (var i = 0; i < 12; i++) {
    result += Math.round(Math.random() * 10);
    if (i === 2 || i === 5 || i === 8) {
      result += ' ';
    }
  }
  return result;
}

function percentCellRenderer(params) {
  var value = params.value;

  var eDivPercentBar = document.createElement('div');
  eDivPercentBar.className = 'div-percent-bar';
  eDivPercentBar.style.width = value + '%';
  if (value < 20) {
    eDivPercentBar.style.backgroundColor = 'red';
  } else if (value < 60) {
    eDivPercentBar.style.backgroundColor = '#ff9900';
  } else {
    eDivPercentBar.style.backgroundColor = '#00A000';
  }

  var eValue = document.createElement('div');
  eValue.className = 'div-percent-value';
  eValue.innerHTML = value + '%';

  var eOuterDiv = document.createElement('div');
  eOuterDiv.className = 'div-outer-div';
  eOuterDiv.appendChild(eValue);
  eOuterDiv.appendChild(eDivPercentBar);

  return eOuterDiv;
}

//Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
  let asString = num + "";
  while (asString.length < totalStringSize) asString = "0" + asString;
  return asString;
}

