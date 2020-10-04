import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err:string;

  constructor(public _AuthService:AuthService,public _Router:Router) { }

  signinForm:FormGroup= new FormGroup({
    'e-mail'    :new FormControl(null,[Validators.required,Validators.email]),
    'password'  :new FormControl(null, Validators.pattern('^[A-Z][a-z][0-9]{5}$')),
  })


  ngOnInit(): void {
  }
  getFormData(formData){
    this._AuthService.signIn(formData.value).subscribe(data=>{
      if(data.message == 'success'){
        this._AuthService.saveUserData(data.citizen,data.token)
        this._Router.navigate(['/home'])
      }
      else{
        this.err='userName or password is notTrue'
      }
    })
  }
}
