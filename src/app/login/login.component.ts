import {Component, Input, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fiscals: any;

  @Input()
  fiscal_number: String;

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:8000');
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
        console.log('Connexion OK');
        console.log(resp);
        this.fiscals = resp;
      },
      (error) => {
        console.log('Connexion NOK')
      });
  }

  onSubmit(){
    this.http.post('http://localhost:8000/customer', { 'fiscal_number': this.fiscal_number }).subscribe(
      (resp) => {
        console.log('Connexion OK');
        console.log(resp);
        this.getFiscals();
      },
      (error) => {
        console.log('Connexion NOK')
      });
  }

}
