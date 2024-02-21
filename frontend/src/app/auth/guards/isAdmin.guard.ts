import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.currentUser.isAdmin) return true;

  router.navigate(['/']);
  return false;
};
