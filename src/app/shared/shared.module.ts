import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HomePageComponent,
    AboutComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
