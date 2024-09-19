import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthnticationService {
  constructor(private _HttpClient: HttpClient) {}

  register(customer: object): Observable<any> {
    return this._HttpClient.post(
      `https://ahmedbooks.runasp.net/api/Customers`,
      customer
    );
  }

  login(customer: object): Observable<any> {
    return this._HttpClient.post(
      `https://ahmedbooks.runasp.net/api/Customers/login`,
      customer
    );
  }
}
