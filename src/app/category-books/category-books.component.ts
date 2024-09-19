import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../book.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-category-books',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './category-books.component.html',
  styleUrl: './category-books.component.css',
})
export class CategoryBooksComponent implements OnInit {
  categoryBooks: any;
  successmassege = false;

  constructor(
    private _BookService: BookService,
    private _ActivatedRoute: ActivatedRoute,
    private _OrderService: OrderService
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.url.subscribe((url) => {
      this._BookService.search(url[1].path).subscribe((response) => {
        this.categoryBooks = response;
      });
    });
  }
  isNew(word: any) {
    return String(word).includes('2024');
  }
  additem(id: number, target: any) {
    target.style.display = 'none';
    this._OrderService.addItem(id);
    this.successmassege = true;
    setTimeout(() => {
      this.successmassege = false;
    }, 2000);
  }
}
