import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        // loadComponent: () => import ('./home/home.component').then(m => m.HomeComponent)
        component: HomeComponent
    }, 
    {
        path: 'order',
        loadComponent: () => import('./orders-card/orders-card.component').then(m => m.OrdersCardComponent)
    }
];
