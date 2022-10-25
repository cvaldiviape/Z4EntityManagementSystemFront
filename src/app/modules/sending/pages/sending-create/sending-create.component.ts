import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingService } from '../../services/sending.service';
import { ContactService } from '../../../../modules/contact/services/contact.service';
import { MessageRequestDTO } from '../../../../models/request/message-request-dto';


@Component({
  selector: 'app-sending-create',
  templateUrl: './sending-create.component.html',
  styleUrls: ['./sending-create.component.css']
})
export class SendingCreateComponent implements OnInit {
  public formReactive: FormGroup;
  public placeholderDestinations: string;
  // public regexDestinatios = '^[a-zA-ZÀ-ÿ]+(\s?[a-zA-ZÀ-ÿ]+?)+$';
  public regexDestinatios = '';
  public listDestinations: string[];
  public itemsForFiltering: string[];
  public listContactsTest: string[];
  public listGroupsTest: string[];
  
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _sendingService: SendingService,
    private _contactService: ContactService
  ) { 
    this.placeholderDestinations = "Contactos *";
    this.formReactive = this._formBuilder.group({
      message     : ['',[Validators.required]],
    });
    this.listDestinations = [];
    this.itemsForFiltering = [];
    this.listContactsTest = ['Maria', 'Juan', 'Pedro', 'Jose', 'Cristina'];
    this.listGroupsTest = ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4', 'Grupo 5'];
  }

  ngOnInit(): void {
    this.setContacts();
  }

  setContacts(): void {
    this._contactService.requestGetAll().subscribe({
      next: (res) => {
        console.log(res);
        // this.itemsForFiltering = res.data... 
      }
    });
    this.itemsForFiltering = this.listContactsTest;
  }

  setGroups(): void {
    this._contactService.requestGetAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        //  this.itemsForFiltering = res.data... 
      }
    });
    this.itemsForFiltering = this.listGroupsTest;
  }

  onSubmit(messageRequestDTO: MessageRequestDTO): void {
    messageRequestDTO.destinations = this.listDestinations.join(',');
    console.log(messageRequestDTO);
    this._sendingService.requestCreate(messageRequestDTO).subscribe({
      next: (res) => {
        console.log(res);
        // this._router.navigateByUrl('/admin/sending');
      }
    });
  }

  selectRadioButton(radioButton: any): void {
    this.listDestinations = [];
    this.itemsForFiltering = [];
    if(radioButton.value === 'contacts'){
      this.placeholderDestinations = 'Contactos *'
      this.setContacts();
    }else{
      this.placeholderDestinations = 'Grupos *'
      this.setGroups();
    }
  }
}
