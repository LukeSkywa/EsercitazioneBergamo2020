import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  eseguiLogin(username: string, password: string) {
    if (username != null && username !== ''
      && password != null && password !== '') {
      sessionStorage.setItem("user", username);
      this.router.navigateByUrl('/portale/home');
    } else {
      alert('Login errata!')
    }
  }
}
