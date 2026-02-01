import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaEntityService {

  constructor() { }

  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:3000/api/media_entities';

  getEntity(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  getAllEntities(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  updateEntity(id: number, data: Partial<any>): Observable<any> {
    return this.http.patch<any>(`${this.API_URL}/${id}`, data);
  }

  createEntity(data: Partial<any>): Observable<any> {
    return this.http.post<any>(this.API_URL, data);
  }

  deleteEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
