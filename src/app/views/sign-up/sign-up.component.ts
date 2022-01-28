import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  invalidAge:boolean = false
  invalidEmail:boolean = false

  constructor() { }

  changeEmail(){
    this.invalidEmail = false
  }
  changeAge(){
    this.invalidAge = false
  }

  ngOnInit(): void {
  }

}
