import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username: any;
  access_token: any;
  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.access_token = localStorage.getItem('access_token');
  }

}
