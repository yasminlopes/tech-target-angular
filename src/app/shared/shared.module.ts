import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';
import { RadiosComponent } from './components/radios/radios.component';

@NgModule({
    declarations: [
        NavbarComponent,
        CarouselMainComponent,
        RadiosComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        CarouselMainComponent,
    ]
})
export class SharedModule { }