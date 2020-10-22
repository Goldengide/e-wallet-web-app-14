import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public screenWidth:any;
  public screenHeight:any;
  constructor() { }
  ngOnInit(): void {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }
  login() {
    console.log("loggin action...")
  }


}
