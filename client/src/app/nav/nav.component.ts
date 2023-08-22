import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
    this.router.navigate(['/huser']);
  }

  isHomePage() {
    return this.router.url === '/huser';
  }
  isAdmin() {
    const role = localStorage.getItem('role');
    return role === 'ROLE_ADMIN';
  }

}
