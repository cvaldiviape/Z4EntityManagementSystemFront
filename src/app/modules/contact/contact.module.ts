import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactCreateComponent } from './pages/contact-create/contact-create.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ModalUploadFileComponent } from './components/modal-upload-file/modal-upload-file.component';
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
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContactListComponent,
    ContactCreateComponent,
    ModalUploadFileComponent,
    ContactEditComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
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
    MatSelectModule,
    MatDialogModule
  ]
})
export class ContactModule { }
