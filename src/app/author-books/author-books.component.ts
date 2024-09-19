import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-author-books',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './author-books.component.html',
  styleUrl: './author-books.component.css',
})
export class AuthorBooksComponent implements OnInit {
  AuthorBooks: any;
  successmassege = false;

  constructor(
    private _BookService: BookService,
    private _ActivatedRoute: ActivatedRoute,
    private _OrderService: OrderService
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.url.subscribe((url) => {
      this._BookService.search(url[1].path).subscribe((response) => {
        this.AuthorBooks = response;
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
