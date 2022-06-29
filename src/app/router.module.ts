
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const appRoutes: Routes = [
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


export default appRoutes;
