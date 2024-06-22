import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { authGuard } from './guards/auth.guard';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'snippet/:id', component: DetailComponent },
    { path: 'create', component: CreateComponent, canActivate: [authGuard] },
    { path: 'about', loadComponent: () => import('./components/terms/terms.component').then(mod => mod.TermsComponent) },  // lazy loading of heavy component
    { path: '**', pathMatch: 'full', component: NotfoundComponent },
];
