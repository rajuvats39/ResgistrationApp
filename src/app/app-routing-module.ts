import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Registration } from './registration/registration';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: Registration },
  { path: 'login', component: Login },
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
