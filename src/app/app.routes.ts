import { Routes } from '@angular/router';

/* pages import */
import {Home} from './pages/home/home';
import {Products} from './pages/products/products';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'produtos',
        component: Products
    }
];
