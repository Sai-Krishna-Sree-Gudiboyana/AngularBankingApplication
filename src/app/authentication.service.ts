import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: string;
  acc_no : string;
  isAdmin : boolean;
  data = [
    {
      "Acc_no": "12345",
      "Acc_name": "abc",
      "Acc_type": "Savings",
      "balance": "123461",
      "password": "12345"
    },
    {
      "Acc_no": "12346",
      "Acc_name": "cde",
      "Acc_type": "Current",
      "balance": "123462",
      "password": "12346"
    },
    {
      "Acc_no": "12347",
      "Acc_name": "fgh",
      "Acc_type": "Checking",
      "balance": "123463",
      "password": "abc"
    }
  ];
  trancationData =[
    {
      "Acc_no": "12345",
      "tranction": [
        {
          "tranctionId": "Tran001",
          "tranctionType": "credit",
          "tranctionDate": "01-01-2021",
          "tranctionAmount": "2000",
          "tranctionRemarks": "enjoy",
          "tranctionOtherParty": "12346",
          "tranctionStatus": "Success"
        },
        {
          "tranctionId": "Tran002",
          "tranctionType": "Debit",
          "tranctionDate": "03-01-2021",
          "tranctionAmount": "2000",
          "tranctionRemarks": "enjoy",
          "tranctionOtherParty": "12347",
          "tranctionStatus": "Success"
        },
        {
          "tranctionId": "Tran003",
          "tranctionType": "credit",
          "tranctionDate": "05-01-2021",
          "tranctionAmount": "200",
          "tranctionRemarks": "after party",
          "tranctionOtherParty": "12348",
          "tranctionStatus": "Pending"
        }
      ]
    },
    {
      "Acc_no": "12346",
      "tranction": [
        {
          "tranctionId": "Tran011",
          "tranctionType": "credit",
          "tranctionDate": "31-12-2020",
          "tranctionAmount": "5000",
          "tranctionRemarks": "For Party",
          "tranctionOtherParty": "12345",
          "tranctionStatus": "Success"
        },
        {
          "tranctionId": "Tran012",
          "tranctionType": "Debit",
          "tranctionDate": "02-01-2021",
          "tranctionAmount": "300",
          "tranctionRemarks": "Have Fun",
          "tranctionOtherParty": "12348",
          "tranctionStatus": "Pending"
        },
        {
          "tranctionId": "Tran013",
          "tranctionType": "credit",
          "tranctionDate": "05-01-2021",
          "tranctionAmount": "300",
          "tranctionRemarks": "after party",
          "tranctionOtherParty": "12341",
          "tranctionStatus": "Success"
        }
      ]
    },
    {
      "Acc_no": "12347",
      "tranction": [
        {
          "tranctionId": "Tran021",
          "tranctionType": "Debit",
          "tranctionDate": "30-12-2020",
          "tranctionAmount": "10000",
          "tranctionRemarks": "Rockkkk",
          "tranctionOtherParty": "12346",
          "tranctionStatus": "Success"
        },
        {
          "tranctionId": "Tran022",
          "tranctionType": "credit",
          "tranctionDate": "01-01-2021",
          "tranctionAmount": "3000",
          "tranctionRemarks": "enjoy",
          "tranctionOtherParty": "12345",
          "tranctionStatus": "Success"
        },
        {
          "tranctionId": "Tran023",
          "tranctionType": "credit",
          "tranctionDate": "04-01-2021",
          "tranctionAmount": "500",
          "tranctionRemarks": "after party",
          "tranctionOtherParty": "12348",
          "tranctionStatus": "Pending"
        }
      ]
    }
  ];
  constructor() { }
}
