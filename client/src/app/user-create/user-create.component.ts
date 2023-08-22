import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user = {
    username: '',
    password: ''
  };
  confirmPassword = '';
  message = '';
  erreurMessage = '';
  role = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  creerCompte() {

    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + access_token)
      .set('content-type', 'application/json');

    const params = new HttpParams().set('role', this.role);

    const body = JSON.stringify(this.user);

    console.log(this.user);
    this.http.post('http://localhost:8080/api/v1/save-user', body, { headers, params }).subscribe(
      (data) => {
        const u = data;
        this.router.navigate(['/user-list']);
        this.message = 'L\'utilisateur a été bien crée';
      },
      (err) => {
        if (err.status === 500) {
          this.erreurMessage = 'Veuillez réessayez ce nom d\'utilisateur existe déja';
        }
      }
    );
  }
}
