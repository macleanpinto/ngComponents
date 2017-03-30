import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const ROUTES: Routes = [
    {
        path: 'app', component: LayoutComponent

    },
    { path: '**', redirectTo: '/app', pathMatch: 'full' }
];
