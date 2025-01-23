import { HttpClient } from '@angular/common/http';
import { Teachers } from './../interface/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  httpUrl = 'http://localhost:300/teachers';
  teachers: Teachers[] = [];

  constructor(private http: HttpClient) {}
  getTeachers(): Observable<Teachers> {
    return this.http.get<Teachers>(this.httpUrl);
  }
}
