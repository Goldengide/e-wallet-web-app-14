import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
