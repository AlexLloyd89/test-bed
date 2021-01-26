import { Injectable } from '@angular/core';
import { CanActivateChild} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  token: string = '';
  constructor(private authSvc: AuthService) {
    this.authSvc.userToken$.subscribe((token) => {
      this.token = token;
    });
  }
  canActivateChild(): boolean {
    return this.token ? true : false;
  }
}
