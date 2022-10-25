import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendingRoutingModule } from './sending-routing.module';
import { SendingCreateComponent } from './pages/sending-create/sending-create.component';
import { SendingListComponent } from './pages/sending-list/sending-list.component';
import { InputsModule } from '../../shared/components/inputs/inputs.module';
import { ButtonsModule } from '../../shared/components/buttons/buttons.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    SendingCreateComponent,
    SendingListComponent
  ],
  imports: [
    CommonModule,
    SendingRoutingModule,
    ButtonsModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MatButtonModule,
    MatNativeDateModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatRadioModule,
  ]
})
export class SendingModule { }
