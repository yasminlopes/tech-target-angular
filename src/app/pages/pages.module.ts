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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResponderComponent } from './responder/responder.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContatoComponent } from './contato/contato.component';
import { ChatComponent } from './chat/chat.component';
import { DashPerQuestionComponent } from './dash-per-question/dash-per-question.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormErroComponent } from '../shared/components/form-erro/form-erro.component';
import { PublishComponent } from './feed/components/publish/publish.component';
import { FeedComponent } from './feed/container/feed.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { NgxPaginationModule } from 'ngx-pagination';
// import { NgxMaskModule, IConfig } from 'ngx-mask'

// export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
    declarations: [
         LadingPageComponent,
         RegisterUserComponent,
         LoginComponent,
         LayoutMainComponent,
         HomeComponent,
         DivulgueComponent,
         DescubraComponent,
         PublicarComponent,
         DashboardComponent,
         ResponderComponent,
         FooterComponent,
         HeaderComponent,
         ContatoComponent,
         ChatComponent,
         DashPerQuestionComponent,
         FeedComponent,
         FormErroComponent,
         PublishComponent,

  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        SharedModule,
        NgSelectModule,
        BsDatepickerModule,
        AccordionModule,
        Ng2SearchPipeModule,
        CdkMenuModule,
        NgxPaginationModule,

    ],
})
export class PagesModule { }