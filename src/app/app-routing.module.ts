import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './core/error/error.component';
import { HomeComponent } from './feature/home/home.component';
import { MyCompComponent } from './feature/my-module/my-comp/my-comp.component';
import { UserComponent } from './feature/user/user/user.component';

const routes: Routes = [
  {path:'', redirectTo: '/home' ,pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'my-comp', component: MyCompComponent},
  {path:'user', component: UserComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
