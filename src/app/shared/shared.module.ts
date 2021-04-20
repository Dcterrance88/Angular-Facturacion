import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from './error-page/error-page.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ErrorPageComponent,
    SidemenuComponent
  ]
})
export class SharedModule { }
