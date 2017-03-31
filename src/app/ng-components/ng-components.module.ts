import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BreadcrumbComponent } from './ng2-breadcrumb/ng2-breadcrumb.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [Ng2BreadcrumbComponent, SearchBoxComponent],
  exports: [Ng2BreadcrumbComponent, SearchBoxComponent]
})
export class NgComponentsModule { }
