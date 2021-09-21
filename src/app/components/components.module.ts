import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalGraphBarComponent } from './horizontal-graph-bar/horizontal-graph-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalGraphBarComponent
  ],
  exports: [
    NavbarComponent,
    HorizontalGraphBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ]
})
export class ComponentsModule { }
