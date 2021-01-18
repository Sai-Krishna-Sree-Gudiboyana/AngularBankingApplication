import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../authentication.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 data; 

  ngOnInit(): void {

    this.data = this.service.data;
  }

  title = 'demoApp';
 email:string;
 password:string;
 remail:string;
 rpassword:string;
 rcpassword:string;

  constructor(private snackBar:MatSnackBar,
    private router: Router,
    private appComp:AppComponent,
    private service: AuthenticationService){

  }
  register() {

  }
  login() {

    this.data = this.data.filter(user =>user.Acc_no === this.email);
    console.log(this.data.length);
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('Login Successful','',{duration:1000});
        this.service.isAdmin = true;
        this.appComp.loggedIn = true;
        this.appComp.isValid = true;
        this.service.user = "Admin";
        this.router.navigate(['/home']);

    }
    else if(this.data.length == 1 && this.password== this.data[0].password){
      this.snackBar.open('Login Successful','',{duration:1000});
        this.service.isAdmin = false;
        this.appComp.loggedIn = true;
        this.appComp.isValid = true;
        this.service.user = "User";
        this.service.acc_no = this.email;
        this.router.navigate(['/home']);
    }
    else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }
}
