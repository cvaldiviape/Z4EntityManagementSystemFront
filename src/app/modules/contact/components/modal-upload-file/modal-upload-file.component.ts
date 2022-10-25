import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-modal-upload-file',
  templateUrl: './modal-upload-file.component.html',
  styleUrls: ['./modal-upload-file.component.css']
})
export class ModalUploadFileComponent implements OnInit {
  public formReactive: FormGroup;
  public formData: FormData = new FormData();
  public validate: string;
  public description: string;
  public name_icon: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _contactService: ContactService
  ) { 
    this.name_icon = 'upload_file';
    this.description = 'Solo se admiten archivos en formato Excel.';
    this.validate = '';
    this.formReactive = this._formBuilder.group({
      files : ['',[Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit(values: any): void{
    this._contactService.requestCreateGroups(this.formData).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }

  onFileChanged(event: any) {
    for(let x of  event.target.files){
      if(!x.name.endsWith("xlsx")){
        this.name_icon = 'error';
        this.description = 'Algunos de los archivos no son del formato solicitado!';
        this.validate = 'error';
        break;
      }
    }
  
    if (event.target.files && event.target.files.length && this.validate!=='error') {
      this.name_icon = 'check_circle_outline'
      this.description = "Carga exitosa, puede grabar los archivos!"
      this.validate = 'success';

      this.formReactive.controls['files'].setValue(event.target.files); // para validar el "formReactive.valid" en el template
      const files = event.target.files; 
      for(let x of files){
          this.formData.append('mi-excel', x, x.name);
      }
      console.log(files);
    }
  }

}