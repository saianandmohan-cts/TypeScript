import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {

  name:string="interpolation"
  username!:string;

  isDisable:boolean=false;

  toggleButton(){
    this.isDisable=!this.isDisable
  }



}
