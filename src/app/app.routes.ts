import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SearchBoxComponent } from './ng-components/search-box/search-box.component';
import { Ng2AgGridComponent } from './ng2-ag-grid/ng2-ag-grid.component';
export const ROUTES = RouterModule.forRoot([
    { path: '', component: LayoutComponent },
    { path: 'search', component: SearchBoxComponent },
    { path: 'aggrid', component: Ng2AgGridComponent },
    { path: 'searchBreadcrumb', outlet: 'breadcrumb', component: SearchBoxComponent },
    { path: 'aggridBreadcrumb', outlet: 'breadcrumb', component: Ng2AgGridComponent }
]);
