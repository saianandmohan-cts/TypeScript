import { Routes } from "@angular/router";
import { HomeComponent } from "./home-component/home-component";

export const HOME_ROUTES:Routes=[
    {path:"",component:HomeComponent,children:[
        {path:"register",loadComponent:()=>import('./register/register').then(r=>r.Register)},
        {path:"search",loadComponent:()=>import('./search/search').then(r=>r.Search)},
        {path:"update",loadComponent:()=>import('./update/update').then(r=>r.Update)},
        {path:"delete",loadComponent:()=>import('./delete/delete').then(r=>r.Delete)},
        {path:"allEmp",loadComponent:()=>import('./all-employee/all-employee').then(r=>r.AllEmployee)}
    ]}
]