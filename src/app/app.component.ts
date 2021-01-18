import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin : boolean = false;
  loggedIn: boolean = false;
  isValid: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.isAdmin = false;
    this.loggedIn = false;
    this.isValid = false;

    this.router.navigate(['/']);

  }
}
