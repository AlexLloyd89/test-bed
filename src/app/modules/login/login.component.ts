import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  route(route: string): void{
    this.router.navigate([route])
  }

  login(username?:string , password?:string ){
   username = 'harry potter'
   password = 'hedwig'
   this.authSvc.login(username, password).subscribe(response=>{
     console.log('response', response);
   }, err=>{
     console.log('err', err);
   })
  }

}
