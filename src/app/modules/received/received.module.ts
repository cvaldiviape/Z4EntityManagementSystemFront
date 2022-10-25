import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivedRoutingModule } from './received-routing.module';
import { ReceivedListComponent } from './pages/received-list/received-list.component';

@NgModule({
  declarations: [
    ReceivedListComponent
  ],
  imports: [
    CommonModule,
    ReceivedRoutingModule
  ]
})
export class ReceivedModule { }
