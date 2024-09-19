import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderI } from './order-i';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private _HttpClient: HttpClient) {}

  AddDBorder(orders: OrderI): Observable<any> {
    return this._HttpClient.post(
      `https://ahmedbooks.runasp.net/api/Orders`,
      orders
    );
  }
  getprofileorder(orders: string): Observable<any> {
    return this._HttpClient.get(
      `https://ahmedbooks.runasp.net/api/Orders/CI=${orders}`
    );
  }
}
