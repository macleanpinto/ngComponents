import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SearchBoxComponent } from './ng-components/search-box/search-box.component';
import { Ng2AgGridComponent } from './ng2-ag-grid/ng2-ag-grid.component';
export const ROUTES = RouterModule.forRoot([
    { path: '', component: LayoutComponent },
    { path: 'search', component: SearchBoxComponent },
    { path: 'aggrid', component: Ng2AgGridComponent },
    { path: 'search', outlet: 'breacrumb', component: SearchBoxComponent },
    { path: 'aggrid', outlet: 'breacrumb', component: Ng2AgGridComponent }
]);
