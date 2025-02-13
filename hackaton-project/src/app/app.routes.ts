import { Routes } from '@angular/router';
import { PartnersComponent } from './pages/partner/partner.components'; 

export const routes: Routes = [
    { path: 'partenaires', component: PartnersComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },  
    { path: '**', redirectTo: '/home' }  
  ];