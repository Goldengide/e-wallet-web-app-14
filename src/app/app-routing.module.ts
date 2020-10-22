import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'login', component: AuthLoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
