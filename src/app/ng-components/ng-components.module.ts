import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BreadcrumbComponent } from './ng2-breadcrumb/ng2-breadcrumb.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SelecteditemsComponent } from './ng2-selecteditems/ng2-selecteditems.component';
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [Ng2BreadcrumbComponent, SearchBoxComponent, Ng2SelecteditemsComponent],
  exports: [Ng2BreadcrumbComponent, SearchBoxComponent,Ng2SelecteditemsComponent]
})
export class NgComponentsModule { }
