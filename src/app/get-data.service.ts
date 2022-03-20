import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  users$:Observable<any>;
  constructor(private http: HttpClient) { }

  getUsers(){
    this.users$ = this.http.get('api/users')
    return this.users$;
  }
}
