import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
import { userList } from './userUtil';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  authLogic(user:User):Observable<boolean>{
    return new Observable(subcreiber=>{
      if(userList.find(e=>e.name==user.name && e.password == user.password)){
        subcreiber.next(true)
      }else{
        subcreiber.error(false)
      }
    })
  }
  

}
