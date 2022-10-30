import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RadiosComponent } from './components/radios/radios.component';

@NgModule({
    declarations: [
        NavbarComponent,
        CarouselMainComponent,
        RadiosComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        OverlayModule,
        CdkMenuModule
    ],
    exports: [
        NavbarComponent,
        CarouselMainComponent,
    ]
})
export class SharedModule { }