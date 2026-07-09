import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {

  arr:number[]=[1,2,3,4,5,6,7,8,9,10]

  getNum(num:number){
    return num%2==0 ? 'green':'red'
  }

}
