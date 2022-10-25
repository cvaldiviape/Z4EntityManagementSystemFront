import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './components/layouts/layouts.module';
import { ButtonsModule } from './components/buttons/buttons.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InputsModule } from './components/inputs/inputs.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutsModule,
    ButtonsModule,
    InputsModule,
    MatSnackBarModule, // necesario para trabajar SnackBarService
  ]
})
export class SharedModule { }