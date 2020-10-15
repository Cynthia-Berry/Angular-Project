import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  myCountries(){
    return this.http.get('../../countries')
  }
}
