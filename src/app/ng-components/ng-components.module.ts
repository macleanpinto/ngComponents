import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BreadcrumbComponent } from './ng2-breadcrumb/ng2-breadcrumb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng2BreadcrumbComponent],
  exports: [Ng2BreadcrumbComponent]
})
export class NgComponentsModule { }
