import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';
import { RadiosComponent } from './components/radios/radios.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule } from '@angular/cdk/overlay';

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