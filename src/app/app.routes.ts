import { Routes } from '@angular/router';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './componenti/login/login.component';
import { RegisterComponent } from './componenti/register/register.component';

export const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}

];
