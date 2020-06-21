import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './home/signin/signin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
