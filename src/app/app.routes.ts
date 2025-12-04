import { Routes } from '@angular/router';
import { FormComponent } from './features/home/form/form.component';

export const routes: Routes = [
    {
        path: '',
        component: FormComponent
    },
    {
        path: 'offers',
        loadComponent: () => import('./features/offers/list/list.component').then(m => m.ListComponent),
    },
    {
        path: 'summary',
        loadComponent: () => import('./features/summary/overview/overview.component').then(m => m.OverviewComponent),
    }
];
