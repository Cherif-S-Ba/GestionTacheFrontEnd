import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

      return this.http.get(`http://localhost:8080/api/v1/getAll-users`, { headers});
  }

  deleteUser(id: number) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.delete(`http://localhost:8080/api/v1/deleteUser/${id}`, { headers });
  }
}
