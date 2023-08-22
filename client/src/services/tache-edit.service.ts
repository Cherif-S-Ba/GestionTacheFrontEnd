import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacheEditService {

  constructor(private http: HttpClient) { }
  getTache(id: number, access_token: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + access_token);

    return this.http.get('http://localhost:8080/api/v1/get-tache/' + id, { headers });
  }

  updateTache(id: number, tache: any, access_token: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + access_token);

    return this.http.put('http://localhost:8080/api/v1/update/' + id, tache, { headers });
  }
}
