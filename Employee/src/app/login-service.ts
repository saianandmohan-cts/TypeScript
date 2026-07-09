import { Injectable } from '@angular/core';
import { userList } from './userUtil';
import { Observable } from 'rxjs';
import { User } from './user';

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
