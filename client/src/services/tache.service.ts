import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }

  getUserInfos(username: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    const params = new HttpParams().set('username', username);
    return this.http.get(`http://localhost:8080/api/v1/get-user-infos/`, { headers, params });
  }

  getUserById(userId: number) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(`http://localhost:8080/api/v1/get-user-id/?id=${userId}`, { headers });
  }

  getTaches() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    if (role === 'ROLE_ADMIN') {
      return this.http.get(`http://localhost:8080/api/v1/getAll-taches`, { headers});
    } else {
      const params = new HttpParams().set('username', username);
      return this.http.get(`http://localhost:8080/api/v1/get-taches/`, { headers, params});
    }
  }

  deleteTache(id: number) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.delete(`http://localhost:8080/api/v1/delete/${id}`, { headers });
  }
}
