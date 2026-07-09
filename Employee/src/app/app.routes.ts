import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {path:"",component:Login},
    {path:'dashboard',component:Dashboard, children:[
        {path:'home',loadChildren:()=>import('./home/homeRoute').then(r=>r.HOME_ROUTES)},
        {path:'hr',loadChildren:()=>import('./hr/hrRoute').then(r=>r.HR_ROUTES)}
    ]}
];
