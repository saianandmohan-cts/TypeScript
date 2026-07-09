import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice2');


  name:string='parent to child'
  message!:string
  arr:number[]=[1,2,3,4,5,6,7,8,9,10]
  isColor:boolean=false

  recieve(msg:string){
    this.message=msg
  }

  toggleColor(){
    this.isColor=!this.isColor
  }

}
