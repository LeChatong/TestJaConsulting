import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fiscals: any;
  fiscal_number: String;
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  constructor(public http: HttpClient) {
    this.fiscal_number = '';
  }

  ngOnInit(): void {
    this.getFiscals();
  }

  getFiscals(){
    console.log('LeChatong')
    this.http.get('http://localhost:8000/customer', { 'headers': this.headers }).subscribe(
      (resp) => {
        console.log('Connexion OK')
        this.fiscals = resp;
      },
      (error) => {
        console.log('Connexion NOK')
      });
  }

  submit(){

  }

}
