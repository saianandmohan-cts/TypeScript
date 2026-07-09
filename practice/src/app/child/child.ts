import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input()
  name!:string

  @Input()
  email!:string

  @Output()
    mssgData = new EventEmitter<string>()
    

    passMessage(){
      this.mssgData.emit('heloo parent i am child')
    }
}
