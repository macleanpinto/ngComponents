import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AgGridModule } from "ag-grid-angular/main";
import { DateComponent } from "./date-component/date.component";
import { HeaderComponent } from "./header-component/header.component";
import { HeaderGroupComponent } from "./header-group-component/header-group.component";
import { Ng2AgGridComponent } from './ng2-ag-grid/ng2-ag-grid.component';
import {RichGridComponent} from './rich-grid-example/rich-grid.component';
import { GlyphiconButtonComponent } from './glyphicon-button/glyphicon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    Ng2AgGridComponent,
    DateComponent,
    HeaderGroupComponent,
    HeaderComponent,
    RichGridComponent,
    GlyphiconButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AgGridModule.withComponents(
      [
        DateComponent,
        HeaderComponent,
        HeaderGroupComponent,
        GlyphiconButtonComponent
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
