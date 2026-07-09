import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Child,FormsModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');

  name!:string;
  email!:string

  username!:string
  userEmail!:string;

  message!:string

  onSubmit(){
    this.userEmail=this.email

    this.username=this.name
  }


  recieve(msg:string){
    this.message=msg
  }
}
