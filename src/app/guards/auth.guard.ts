import { Injectable } from '@angular/core';
import { CanLoad, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  token: string = '';
  constructor(private authSvc: AuthService, private router: Router) {
    this.authSvc.userToken$.subscribe((token) => {
      this.token = token;
    });
  }
  canLoad(): boolean {
    if(!this.token){
      this.router.navigate(['/'])
    }
    return this.token ? true : false;
  }
}
