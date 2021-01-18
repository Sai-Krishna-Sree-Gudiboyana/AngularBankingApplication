import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TranscationsComponent } from './transcations/transcations.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
  path: '',
  component: LoginComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'transcations',
  component: TranscationsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
