import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent implements OnInit {
  constructor(
    private _BookService: BookService,
    private _OrderService: OrderService
  ) {}

  AllBook: any;
  highestRated: any[] = [];
  successmassege = false;

  ngOnInit(): void {
    this._BookService.getAllBook().subscribe((response) => {
      this.AllBook = response;
      this.Hightesaverage();
    });
  }
  Hightesaverage() {
    for (let index = 0; index < this.AllBook.length; index++) {
      if (this.AllBook[index].reviews > 8.5) {
        this.highestRated.push(this.AllBook[index]);
      }
    }
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
