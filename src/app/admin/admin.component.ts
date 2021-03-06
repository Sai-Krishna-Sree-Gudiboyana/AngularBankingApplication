import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
    private appComp: AppComponent) { }

  ngOnInit(): void {
    if(!this.appComp.isValid){
      this.router.navigate(['/']);

    }

  }

}
