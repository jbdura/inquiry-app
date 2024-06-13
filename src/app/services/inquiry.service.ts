import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  private apiUrl = 'http://localhost:8000/api/inquiries';

  constructor (private http: HttpClient) { }

  getInquiries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get`);
  }

  getInquiry(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/${id}`);
  }

  createInquiry(inquiry: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, inquiry);
  }

  updateInquiry(id: number, inquiry: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit/${id}`, inquiry);
  }

  deleteInquiry(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
}
