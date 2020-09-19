import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



const routes: Routes = [
  {path:"sign-in",component:SignInComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"admin-login",component:AdminLoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
