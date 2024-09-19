import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  userName = new BehaviorSubject(localStorage.getItem('username'));
  constructor() {}
}
