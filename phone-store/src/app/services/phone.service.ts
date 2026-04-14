import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private apiUrl = 'http://127.0.0.1:8000/api/products/';

  constructor(private http: HttpClient) {}

  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.apiUrl);
  }

  getPhone(id: number): Observable<Phone> {
    return this.http.get<Phone>(`${this.apiUrl}${id}/`);
  }
}