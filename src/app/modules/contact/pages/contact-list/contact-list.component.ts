import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '../../../../models/common/contact';
import { Group } from '../../../../models/common/group';
import { ContactService } from '../../services/contact.service';
import { ModalUploadFileComponent } from '../../components/modal-upload-file/modal-upload-file.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, AfterViewInit {
  public displayedColumns: any[];
  public contacts: Contact[];
  public dataSource: MatTableDataSource<Contact>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public groups: Group[];

  constructor(
    private _contactService: ContactService,
    public dialog: MatDialog
  ) {
    this.displayedColumns = ['dni','name','phone'];
    this.contacts = [
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
      {dni: "12345678", name: "name test", phone: '99999999'},
  
    ];
    this.dataSource = new MatTableDataSource(this.contacts);
    this.groups = [
      {id: 1, name: 'Fex grupo 1'},
      {id: 2, name: 'Sack grupo 2'},
      {id: 3, name: 'Max grupo 3'},
    ];
   }

  ngOnInit(): void {
    this._contactService.requestGetAll().subscribe({
      next: (res) => {
        console.log(res);
        // this.contacts = res.data;   
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  selectGroup(matSelect: any): void {
    console.log(matSelect.value);
  }

  openDialog(): void {
    this.dialog.open(ModalUploadFileComponent);
  }

}