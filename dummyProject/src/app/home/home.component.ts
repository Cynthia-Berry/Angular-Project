import { Component ,OnInit } from '@angular/core';
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  comments: Object;

  constructor(private _http: HttpService) {
   
  }

  ngOnInit() {
    this._http.myComments().subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    });
  }

}
