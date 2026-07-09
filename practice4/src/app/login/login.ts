import { Component, inject, signal } from '@angular/core';
import { LoginService } from '../login-service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  name!:string;
  password!:string;
  message=signal('')

  loginService = inject(LoginService)

  loginUser(){
    this.loginService.authLogic(new User(this.name,this.password))
    .subscribe({
      next:result=>this.message.set('successfull logged in'),
      error:err=>this.message.set('Invalid Credential')
    })
  }

}
