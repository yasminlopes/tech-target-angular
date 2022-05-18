import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';

@NgModule({
    declarations: [
        LayoutComponent,
        NavbarComponent,
        CarouselMainComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        LayoutComponent,
        NavbarComponent,
        CarouselMainComponent
    ]
})
export class SharedModule { }