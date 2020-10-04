import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';
//import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {path:'',redirectTo:`home`,pathMatch:`full`},
 // {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'signin',component:LoginComponent},

  {path:'moviedetails/:id',component:MovieDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
