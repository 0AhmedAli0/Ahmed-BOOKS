import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { BookService } from '../book.service';
import { ProfileService } from '../profile.service';
import { OrderI } from '../order-i';
import { FormsModule } from '@angular/forms';
import { ItemDetailsI } from '../item-details-i';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, RouterLink],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  BooksDetails: any[] = [];
  totalPrice: number = 0;
  quantaty: [] = [];
  items: ItemDetailsI[] = [];

  body: any;
  constructor(
    private _OrderService: OrderService,
    private _BookService: BookService,
    private _ProfileService: ProfileService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.body = document.querySelector('.order-body');
    this.getBooksDetails();
  }
  deleteItem(id: number) {
    this._OrderService.deletItem(id);
    this.BooksDetails.length = 0;
    this.totalPrice = 0;
    this.getBooksDetails();
  }
  getBooksDetails() {
    for (let index = 0; index < this._OrderService.ordersId.length; index++) {
      this._BookService
        .BookDetails(`${this._OrderService.ordersId[index]}`)
        .subscribe((response) => {
          this.BooksDetails.push(response);
          this.totalPrice = this.totalPrice + response.price;
        });
    }
  }

  pushDataInItemDetails() {
    for (let index = 0; index < this._OrderService.ordersId.length; index++) {
      const itemcontent: ItemDetailsI = {
        itemId: this._OrderService.ordersId[index],
        quantatity: this.quantaty[index],
      };
      this.items.push(itemcontent);
    }
  }

  postOrder() {
    if (localStorage.getItem('id')) {
      this.pushDataInItemDetails();
      const order: OrderI = {
        customerId: parseInt(localStorage.getItem('id') || '0'),
        oneItem: this.items,
      };
      this._ProfileService.AddDBorder(order).subscribe((response) => {
        if (response == null) {
          this._OrderService.numberofItems.next(0);
          this._OrderService.ordersId.length = 0;

          this.body.innerHTML = `<div style="  background-color: #03a53c;
          font-size: 30px;text-align: center;padding: 20px;"
          >Success Order <i class="fa-solid fa-check ms-3"></i></div>`;
        }
      });
    } else {
      this._Router.navigate(['/login']);
    }
  }
}
