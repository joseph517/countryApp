import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutComponent } from './shared/pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]




@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class appRoutingModule { }
