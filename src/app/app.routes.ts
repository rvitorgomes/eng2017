import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './profile/login';

const externalRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'app' , pathMatch: 'full' }
];

export const external: ModuleWithProviders = RouterModule.forRoot(externalRoutes);

