import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRequestDTO } from 'src/app/models/request/user-request-dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public hide: boolean; /* password */
  public loading: boolean;
  public formReactive: FormGroup;
  public qrCode: string | undefined;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
  ) { 
    this.hide = true;
    this.loading = false;
    this.formReactive = this._formBuilder.group({
      usernameOrEmail	: [""],
      password : [""],
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit(userRequestDTO: UserRequestDTO): void {
    this.loading = true;
    // this._authService.requestLogin().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this._router.navigateByUrl('/admin');
    //     this.loading = false;
    //   }
    // });
    // this._router.navigateByUrl('/admin');
  }

  goRegister(): void {
    this._router.navigateByUrl('/auth/register');
  }

}
