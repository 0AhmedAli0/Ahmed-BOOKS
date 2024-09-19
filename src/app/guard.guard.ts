import { CanActivateFn, Router } from '@angular/router';
import { UsernameService } from './username.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  let _Router = inject(Router);
  let username = inject(UsernameService);
  if (username.userName.getValue() == null) {
    _Router.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};
