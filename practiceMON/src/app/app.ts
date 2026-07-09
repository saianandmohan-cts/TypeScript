import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practiceMON');

  interpolation:string = 'this is interpolation'
  isDisable:boolean=false;
  name:string='Parent to child'
  message!:string
  arr:number[]=[1,2,3,4,5,6,7,8,9,10]
  isColor:boolean=false

  toggleButton(){
    this.isDisable=!this.isDisable
  }

  recieve(msg:string){
    this.message=msg
  }

  toggleColor(){
    this.isColor=!this.isColor
  }


}
