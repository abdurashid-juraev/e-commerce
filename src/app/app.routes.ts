import { Routes } from '@angular/router';
import { AuthLayoutComponents } from './layout/auth-layout/authLayout.component';
import { MainLayoutComponents } from './layout/main-layout/mainLayout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { ContactComponent } from './pages/contact/contact.component';
import CrudComponent from './pages/contact/crud/crud.component';
import { DraftComponent } from './pages/contact/draft/draft.component';
import FormComponent from './pages/contact/form/form.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponents,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'card-detail/:id', component: DetailsComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'crud', component: CrudComponent },
  {path: 'form', component: FormComponent},
  {path:'draft', component: DraftComponent},
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
