import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { HomeComponent } from './home/home.component';
import { DivulgueComponent } from './divulgue/divulgue.component';
import { DescubraComponent } from './descubra/descubra.component';
import { PublicarComponent } from './publicar/publicar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    declarations: [
         LadingPageComponent,
         RegisterUserComponent,
         LoginComponent,
         LayoutMainComponent,
         HomeComponent,
         DivulgueComponent,
         DescubraComponent,
         PublicarComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        SharedModule,
        NgSelectModule,
        BsDatepickerModule
    ],
})
export class PagesModule { }