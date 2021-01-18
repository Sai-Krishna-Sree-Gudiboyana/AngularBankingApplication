import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../authentication.service';

export interface User {
  Acc_no: string;
  Acc_type: string;
  balance: string;
  Acc_name: string;
  
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [
    `
      table {
        width: 100%;
      }
      
      
      th.mat-sort-header-sorted {
        color: black;
      }
    
    `
  ]
})
export class HomeComponent implements OnInit {

  User: boolean;
  displayedColumns: string[] = ['Acc_no', 'Acc_name', 'Acc_type', 'balance'];
  dataSource;
  data;
  
  constructor(private router: Router,
    private appComp: AppComponent,
    private service: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.appComp.isValid){
      this.router.navigate(['/']);

    }
    this.User = this.service.isAdmin;
    this.data = this.service.data;
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return (
        data.Acc_no.toLowerCase().includes(filter) ||
        data.Acc_name.toLowerCase().includes(filter)
      );
    };
    if(this.service.user == "User"){
      this.applyFilter(this.service.acc_no);
      
    }
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    
    console.log(this.dataSource);
  }
  getTranscations(element: User){
    this.service.acc_no = element.Acc_no;
    this.router.navigate(['/transcations']);

  }

  
}
