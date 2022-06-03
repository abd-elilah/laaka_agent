import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './agent/profile/profile.component';
import { LoginComponent } from './authentification/login/login.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ClientItemComponent } from './client/client-item/client-item.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  // {
  //   path:'navbar',
  //   component: NavbarComponent,
  //   children:
  //   [
  //     //{path:"add-client",component:ClientsFormComponent},
  //     {path:"Clients",component:ClientListComponent},
  //     {path:"Client",component:ClientItemComponent},
  //     {path:"profile",component:ProfileComponent}
  //   ]

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
