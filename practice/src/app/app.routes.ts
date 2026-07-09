import { Routes } from '@angular/router';
import { Databinding } from './databinding/databinding';
import { Question } from './question/question';

export const routes: Routes = [
    {path:"data", component:Databinding},
    {path:"question",component:Question}
];
