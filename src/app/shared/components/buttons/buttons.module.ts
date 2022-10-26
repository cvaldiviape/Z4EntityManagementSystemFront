import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { BtnCustomAComponent } from './btn-custom-a/btn-custom-a.component';
import { BtnCustomBComponent } from './btn-custom-b/btn-custom-b.component';
import { BtnCustomCComponent } from './btn-custom-c/btn-custom-c.component';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    BtnCustomAComponent,
    BtnCustomBComponent,
    BtnCustomCComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingButtonComponent,
    BtnCustomAComponent,
    BtnCustomBComponent,
    BtnCustomCComponent
  ]
})
export class ButtonsModule { }
