import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  { path: "welcome", component: WelcomeComponent },

  { path: "dashboard", component: DashboardComponent,
      children: [
          { path: "welcome", component: WelcomeComponent },
          { path: "home", component: HomeComponent },
          { path: "aboutus", component: AboutusComponent }
      ]
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
