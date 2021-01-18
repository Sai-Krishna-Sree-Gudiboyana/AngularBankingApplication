import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-transcations',
  templateUrl: './transcations.component.html',
  styleUrls: ['./transcations.component.css']
})
export class TranscationsComponent implements OnInit {

  dataSource;
  acc_no: string;
  transcationData;
  displayedColumns: string[] = ['tranctionId', 'tranctionType', 'tranctionDate', 'tranctionAmount','tranctionRemarks', 'tranctionOtherParty','tranctionStatus'];
  constructor(private router: Router,
    private service: AuthenticationService) { }

  ngOnInit(): void {
    
    // this.dataSource = new MatTableDataSource(this.service.trancationData);
    // this.dataSource.filterPredicate = function(data, filter: string): boolean {
    //   return (
    //     data.Acc_no.toLowerCase().includes(filter) 
        
    //   );
    // };
    // this.applyFilter(this.service.acc_no);
    this.dataSource = this.service.trancationData.filter(element => element.Acc_no === this.service.acc_no);
    if(this.dataSource.length === 0){
      this.router.navigate(['/']);
    }
    console.log(this.dataSource);
    this.displayTranscation();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  
    console.log(this.dataSource);
  }

  displayTranscation(){
    // this.acc_no = this.dataSource.filteredData[0].Acc_no;
    // this.transcationData = new MatTableDataSource(this.dataSource.filteredData[0].tranction) ;
    this.acc_no = this.dataSource[0].Acc_no
    this.transcationData = new MatTableDataSource(this.dataSource[0].tranction);
    console.log(this.transcationData);
    console.log(this.acc_no);

  }

}
