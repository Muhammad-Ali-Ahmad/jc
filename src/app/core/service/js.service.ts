import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Experience} from '../interfaces/experience'

@Injectable({
  providedIn: 'root'
})
export class JsService {
  url = 'http://localhost:3030/api';
  constructor(private http: HttpClient) { }

  getMessage(message: string): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.url}/getMessage`, { params: {message}});
  }

  getMessageById(id: string): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.url}/getMessageById`, { params: {id}});
  }

  addExperience(experience: Experience) {
    return this.http.post(`${this.url}/addExperience`, experience);
  }
}
