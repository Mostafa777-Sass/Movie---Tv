import { Component, OnInit } from '@angular/core';
import {  AuthService} from "../auth.service";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']

})
export class NavBarComponent implements OnInit {
  islogin:boolean=false;

  constructor(public _AuthService:AuthService) {

  _AuthService.userData.subscribe(data=>{
      if(data)
      {
        this.islogin=true;
      }else{
        this.islogin=false;
      }
})


   }

  ngOnInit(): void {
  }

}
