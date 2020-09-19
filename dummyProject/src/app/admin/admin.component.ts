import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  todo: any[] = [];
  sub: Subscription;
  todoForm: FormGroup;
  constructor(private service: AdminService) {

   }

  ngOnInit(): void {
   this.service.getTodos();
   this.sub = this.service.getTodosUpdater().subscribe(
     data => { this.todo = data.todo; }
   )
  }

  ngOnDestroy() {
  this.sub.unsubscribe();
  }

}
