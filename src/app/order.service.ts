import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  ordersId: number[] = [];
  numberofItems = new BehaviorSubject(0);
  constructor() {}
  addItem(id: number) {
    this.ordersId.push(id);
    this.numberofItems.next(this.ordersId.length);
  }
  deletItem(id: number) {
    this.ordersId.splice(this.ordersId.indexOf(id), 1);
    this.numberofItems.next(this.ordersId.length);
  }
}
