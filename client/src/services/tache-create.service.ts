import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TacheCreateService {

  constructor(private http: HttpClient, private router: Router) { }

  createTache(tache: any) {
    const access_token = localStorage.getItem('access_token');
    const id = Number(localStorage.getItem('user_id'));

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + access_token)
      .set('content-type', 'application/json');

    tache.utilisateur = id;
    console.log(id);
    const body = JSON.stringify(tache);
    console.log(tache);

    return this.http.post('http://localhost:8080/api/v1/save', body, { headers });
  }
}
