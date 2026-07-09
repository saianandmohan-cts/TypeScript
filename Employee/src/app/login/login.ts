import { Component, inject, signal } from '@angular/core';
import { LoginService } from '../login-service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    name!:string;
  password!:string;
  message=signal('')

  loginService = inject(LoginService)
  route = inject(Router)

  loginUser(){
    this.loginService.authLogic(new User(this.name,this.password))
    .subscribe({
      next:result=>this.route.navigateByUrl('/dashboard'),
      error:err=>this.message.set('Invalid Credential')
    })
  }

}
