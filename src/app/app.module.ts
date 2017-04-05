import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AgGridModule } from "ag-grid-angular/main";
import { DateComponent } from "./date-component/date.component";
import { HeaderComponent } from "./header-component/header.component";
import { HeaderGroupComponent } from "./header-group-component/header-group.component";
import { Ng2AgGridComponent } from './ng2-ag-grid/ng2-ag-grid.component';
import { RichGridComponent } from './rich-grid-example/rich-grid.component';
import { GlyphiconButtonComponent } from './glyphicon-button/glyphicon-button.component';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DynamicTabComponent } from './ng2-bootstrap-tabs/tabs.component';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { PopoverNg2BootstrapComponent } from './ng2-bootstrap-popover/popover.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { LayoutComponent } from './layout/layout.component';
import { NgComponentsModule } from './ng-components/ng-components.module';
import { AttributeComponent } from './rebate-rules/attribute.component';
import { RulesEditComponent } from './rebate-rules/rules-edit.component';
import {TooltipModule, DatepickerModule} from 'ng2-bootstrap/ng2-bootstrap';
import { NgDatepickerComponent } from './ng-components/ng2-date/ng-date.component';
import { AgreementSearchGridComponent } from './agreement-search-grid/agreement-search-grid.component';
import { AgreementSearchService } from './agreement-search-grid/agreement-search.service';
import { DemoFormSkuBuilder } from './ng-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Ng2AgGridComponent,
    DateComponent,
    HeaderGroupComponent,
    HeaderComponent,
    RichGridComponent,
    GlyphiconButtonComponent,
    DynamicTabComponent,
    PopoverNg2BootstrapComponent,
    LayoutComponent,
    AttributeComponent,
    RulesEditComponent,NgDatepickerComponent, AgreementSearchGridComponent,
    DemoFormSkuBuilder
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    ROUTES,
    DatepickerModule.forRoot(),TooltipModule,
    ReactiveFormsModule,
    AgGridModule.withComponents(
      [
        DateComponent,
        HeaderComponent,
        HeaderGroupComponent,
        GlyphiconButtonComponent
      ]
    ),
    NgComponentsModule
  ],
  providers: [AgreementSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
