import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  constructor(private http: HttpClient) { }
  getUser(id: number, access_token: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + access_token);
    return this.http.get(`http://localhost:8080/api/v1/get-user/?id=${id}`, { headers});
  }
  updateUser(id: number, username: string, password: string, role: string, access_token: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + access_token);

    const user = {
      username: username,
      password: password
    };
    const params = new HttpParams().set('role', role);
    return this.http.put('http://localhost:8080/api/v1/update-user/' + id, user, { headers, params });
  }
}
