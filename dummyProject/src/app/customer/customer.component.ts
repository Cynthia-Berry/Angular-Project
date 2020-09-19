import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private client: FormBuilder) {
    this.todoForm = this.client.group({
      userId: [''],
      title: [''],
      completed: ['']
    })
   }


   submitForm() {
     const { userId, title, completed } = this.todoForm.value;

     const data: any = { userId, title, completed }
     this.todoForm.reset();
     console.log(data);
   }

  ngOnInit(): void {
  }

}
