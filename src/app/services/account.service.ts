import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createAccount(account: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/account/create`, account);
  }

  getAccount(accountNumber: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/account/${accountNumber}`);
  }

  getAllAccounts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/accounts`);
  }

  updateAccount(id: number, account: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/account/update/${id}`, account);
  }

  searchAccounts(searchRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/account/search`, searchRequest);
  }
}

