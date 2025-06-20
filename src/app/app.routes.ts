import { Routes } from '@angular/router';
import { AuthLayoutComponents } from './layout/auth-layout/authLayout.component';
import { MainLayoutComponents } from './layout/main-layout/mainLayout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponents,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'card-detail/:id', component: DetailsComponent },
    ],
  },

  {
    path: '',
    component: AuthLayoutComponents,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignupComponent,
      },
    ],
  },
];
