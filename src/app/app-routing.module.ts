import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DescubraComponent } from './pages/descubra/descubra.component';
import { DivulgueComponent } from './pages/divulgue/divulgue.component';
import { HomeComponent } from './pages/home/home.component';
import { LadingPageComponent } from './pages/lading-page/lading-page.component';
import { LayoutMainComponent } from './pages/layout-main/layout-main.component';
import { LoginComponent } from './pages/login/login.component';
import { PublicarComponent } from './pages/publicar/publicar.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

const routes: Routes = [
  { path: '', component: LadingPageComponent },
  { path: 'home', component: LadingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { 
    path: 'main', 
    component: LayoutMainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'divulgue', component: DivulgueComponent },
      { path: 'descubra', component: DescubraComponent },
      { path: 'publicar', component: PublicarComponent },
      { path: 'grafico', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
