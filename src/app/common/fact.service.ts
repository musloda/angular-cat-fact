import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor(private service: HttpClient) { }

  readAll(): Observable<any> {
    return this.service.get<any>('/facts/');
  }

  readById(id: string): Observable<any> {
    return this.service.get<any>(`/facts/${id}`);
  }
}
