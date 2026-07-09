import { Routes } from "@angular/router";
import { HrComponent } from "./hr-component/hr-component";

export const HR_ROUTES:Routes=[
    {path:"",component:HrComponent,children:[
        {path:'legal',loadComponent:()=>import('./legal/legal').then(r=>r.Legal)},
        {path:'payroll',loadComponent:()=>import('./payroll/payroll').then(r=>r.Payroll)},
        {path:'recruitment',loadComponent:()=>import('./recruitment/recruitment').then(r=>r.Recruitment)}
    ]}
]