import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Modules */
import { AppRoutingModule } from '../app-routing.module';
import {
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';
/* Components */
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [HeaderComponent, SideNavComponent]
})
export class CoreModule {}
