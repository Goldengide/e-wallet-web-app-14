import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from "@angular/cdk/platform/";
// import {  } from "@";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-wallet-web-app';
  // title = 'Card View Demo';
  public screenWidth:any;
  public screenHeight:any;
  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  // private constructor():any[] {
  //   // Platform.
  // +31 70 515 85 15, +1 212 963 1234,  youthenvoy@un.org; dpa-scsb3@un.org
  //   console.log("Hello")
  // }

  ngOnInit() {
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

}
