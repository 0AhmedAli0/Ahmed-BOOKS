import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user = '';
  profileOrders: any;
  constructor(private _ProfileService: ProfileService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('username') || '';
    this._ProfileService
      .getprofileorder(localStorage.getItem('id') || '2')
      .subscribe((response) => {
        this.profileOrders = response;
      });
  }
}
