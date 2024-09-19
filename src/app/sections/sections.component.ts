import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css',
})
export class SectionsComponent {
  categories: any;
  constructor(
    private _BookService: BookService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.url.subscribe((url) => {
      this._BookService.Allcategories().subscribe((response) => {
        this.categories = response;
      });
    });
  }
  isNew(word: any) {
    return String(word).includes('2024');
  }
}
