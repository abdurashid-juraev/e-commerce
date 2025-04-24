import { UserPost, Users } from './../interface/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  httpUrl = 'http://localhost:3000/users';
  /**
   *
   * @returns
   */
  getUsers(id: number): Observable<Users[]> {
    return this.http.get<Users[]>(this.httpUrl);
  }
  /**
   *
   * @param model
   * @returns
   */
  add(model: UserPost): Observable<Users[]> {
    return this.http.post<Users[]>(this.httpUrl, model);
  }
  /**
   *
   *
   */
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.httpUrl}/${id}`);
  }

  edit(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.httpUrl}/${id}`);
  }
  update(id: number, user: UserPost): Observable<Users> {
    return this.http.put<Users>(`${this.httpUrl}/${id}`, user);
  }
}
