import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit {
  BookDetails: any;
  relatedBooks: any;
  AuthorBooks: any;
  successmassege = false;

  constructor(
    private _BookService: BookService,
    private _ActivatedRoute: ActivatedRoute,
    private _OrderService: OrderService
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.url.subscribe((url) => {
      this._BookService.BookDetails(url[1].path).subscribe((response) => {
        this.BookDetails = response;
        this._BookService
          .search(this.BookDetails.category)
          .subscribe((response) => {
            this.relatedBooks = response;
            console.log(response);
          });
        this._BookService
          .search(this.BookDetails.author)
          .subscribe((response) => {
            this.AuthorBooks = response;
            console.log(response);
          });
      });
    });
  }
  isNew(word: any) {
    return String(word).includes('2024');
  }
  additem(id: number) {
    this._OrderService.addItem(id);
    this.successmassege = true;
    setTimeout(() => {
      this.successmassege = false;
    }, 2000);
  }
  // slideButtonPre(chil: any) {
  //   this.imgContainer = document.querySelectorAll('.slider .slider-content');
  //   this.scrollAmount = this.imgContainer[chil].clientWidth * -1;
  //   this.imgContainer[chil].scrollBy({
  //     left: this.scrollAmount,
  //     behavior: 'smooth',
  //   });
  // }
  // slideButtonNex(chil: any) {
  //   this.imgContainer = document.querySelectorAll('.slider .slider-content ');
  //   this.scrollAmount = this.imgContainer[chil].clientWidth;
  //   this.imgContainer[chil].scrollBy({
  //     left: this.scrollAmount,
  //     behavior: 'smooth',
  //   });
  // }
  // handelSlideButtom(chil: any) {
  //   this.imgContainer = document.querySelectorAll('.slider .slider-content');
  //   this.maxScrollWidth =
  //     this.imgContainer[chil].scrollWidth - this.imgContainer[chil].clientWidth;
  //   this.slideButton = document.querySelectorAll('.slider .slide-button');
  //   console.log(this.slideButton);
  //   if (chil == 0) {
  //     this.slideButton[0].style.display =
  //       this.imgContainer[chil].scrollLeft <= 0 ? 'none' : 'block';
  //     this.slideButton[1].style.display =
  //       this.imgContainer[chil].scrollLeft >= this.maxScrollWidth
  //         ? 'none'
  //         : 'block';
  //   } else if (chil == 1) {
  //     this.slideButton[2].style.display =
  //       this.imgContainer[chil].scrollLeft <= 0 ? 'none' : 'block';
  //     this.slideButton[3].style.display =
  //       this.imgContainer[chil].scrollLeft >= this.maxScrollWidth
  //         ? 'none'
  //         : 'block';
  //   } else {
  //     this.slideButton[4].style.display =
  //       this.imgContainer[chil].scrollLeft <= 0 ? 'none' : 'block';
  //     this.slideButton[5].style.display =
  //       this.imgContainer[chil].scrollLeft >= this.maxScrollWidth
  //         ? 'none'
  //         : 'block';
  //   }
  // }
}
