import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderService } from '../order.service';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  header: any;
  backTopBtn: any;
  opentogol = false;
  onscroll = false;
  user: any;
  orders: number = 0;

  constructor(
    private _Router: Router,
    private _OrderService: OrderService,
    private _UsernameService: UsernameService
  ) {}
  ngOnInit(): void {
    this._UsernameService.userName.subscribe((userName) => {
      this.user = userName;
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.onscroll = true;
      } else {
        this.onscroll = false;
      }
    });
    this._OrderService.numberofItems.subscribe((numOrder) => {
      this.orders = numOrder;
    });
  }
  reverse() {
    this.opentogol = !this.opentogol;
  }
  goToSearch(e: any) {
    if (e.target.value.length > 0) {
      this._Router.navigate(['/search', e.target.value]);
    } else {
      this._Router.navigate(['/home']);
    }
  }
}
