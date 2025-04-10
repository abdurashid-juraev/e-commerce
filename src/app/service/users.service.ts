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
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.httpUrl);
  }
  /**
   * 
   * @param model 
   * @returns 
   */
  add(model:UserPost){
    return this.http.post<Users>(this.httpUrl,model)
  }
  /**
   * 
   * 
   */
  delete(id:number):Observable<Users[]>{
    return this.http.delete<Users[]>(`${this.httpUrl}/${id}`)
  }
  
}
