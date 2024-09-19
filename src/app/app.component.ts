import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllBooksComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'BooksAPI';
  onscroll = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.onscroll = true;
      } else {
        this.onscroll = false;
      }
    });
  }
  gotoTop() {
    window.scrollTo(0, 0);
  }
}
