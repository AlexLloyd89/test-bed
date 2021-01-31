import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  token!: string;
  route!: string;
  constructor(private authSvc: AuthService, private router: Router) {}
  ngOnInit() {
    this.authSvc.userToken$.subscribe((response) => {
      this.token = response;
    });
    this.router.events.subscribe(url=>{
     if( url instanceof NavigationEnd){
       this.route = url.url
     }
    })
  }

  navigate(): void{
    let route = this.route.includes('/collection') ? '/search' : '/collection'
    this.router.navigate([route])
  }

  logout(){
  this.authSvc.logout()
  }
}
