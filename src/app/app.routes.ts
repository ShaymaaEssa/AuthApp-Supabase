import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { pages } from './core/environment/pages';

export const routes: Routes = [
    {path: '', redirectTo:  '/login', pathMatch: 'full' },
    {path:pages.Login, component:LoginComponent, title:'login'},
    {path:pages.Register, component:RegisterComponent, title:'register'}
];
