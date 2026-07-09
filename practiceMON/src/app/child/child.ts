import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Input()
  username!:string;


  @Output()
    em = new EventEmitter()

    passMessage(){
      this.em.emit('child to parent communication')
    }

}
