import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {


  clickCounter: number = 0;
  message: string = "";
  fname: string = "";
  lname:string = "";
  birthdate: number;
  age: number;

  constructor() { }

  ngOnInit(): void {
  }
  countClick(): void {
    this.clickCounter += 1;
    if(this.clickCounter == 1){
      this.message = "Welcome to my typescript channel";

    }else if (this.clickCounter == 2){
      this.message = "Lol, I understand you can't wait to explore Typescript"
    }else{

      this.message = "You clicked multiple times";
    }
  }

  calculateAge(): void {
    if(this.birthdate){
      let timeDiff = Date.now() - this.birthdate;
      this.age = ((timeDiff  / (1000 * 3600 * 24))/365);
    }
  }
}
