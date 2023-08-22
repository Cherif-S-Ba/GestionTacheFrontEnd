import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any) {
    return this.http.post('http://localhost:8080/auth/login', user);
  }

  auth(data: any) {
    const accessToken = data.access_token;
    const username = data.username;
    const roles = data.roles;

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('username', username);
    localStorage.setItem('role', roles);

    this.router.navigate(['/tache']);
  }

}
