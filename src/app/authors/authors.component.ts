import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent implements OnInit {
  Authors: any;
  constructor(
    private _BookService: BookService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.url.subscribe((url) => {
      this._BookService.AllAuthors().subscribe((response) => {
        this.Authors = response;
      });
    });
  }
  isNew(word: any) {
    return String(word).includes('2024');
  }
}
