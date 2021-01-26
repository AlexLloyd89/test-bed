import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  displayPassword: boolean = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private router: Router, private authSvc: AuthService, private snack: MatSnackBar) {}

  ngOnInit(): void {}

  route(route: string): void {
    this.router.navigate([route]);
  }

  login(): void {
    //-username: harry potter
    //-password: hedwig
    if(this.loginForm.valid){
      this.authSvc.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(response=>{
        //on success, set userToken and navigate to correct page
        this.authSvc.userToken$.next(response);
        this.router.navigate(['/search'])
      }, err=>{
        //on error, display a snackbar to user
        this.snack.open('Invalid username or password', 'close', {duration: 3000})
      })
    }
  }

  hasError(controlName: string, errorName: string) {
    //check if formcontrol currently has error
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  showPassword() {
    this.displayPassword = !this.displayPassword;
  }
}
