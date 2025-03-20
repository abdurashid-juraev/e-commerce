import { Users } from './../interface/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  httpUrl = 'http://localhost://3000/users';

  getUsers(): Observable<Users> {
    return this.http.get<Users>(this.httpUrl);
  }
}
