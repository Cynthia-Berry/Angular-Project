import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API: string = environment.API_URL;
  todo: any;

  public getTodosUpdated = new Subject<{todo: any}>();

  constructor(private http: HttpClient) { }

  getTodosUpdater = () => {
    return this.getTodosUpdated.asObservable();
  }



  getTodos = () => {
    this.http.get<any>(`${this.API}/todos/`).subscribe(
      data => {
        this.todo = data;
        this.getTodosUpdated.next({todo: this.todo})
      }
    )
  }


  create = (data: any) => {
    this.http.post<any>(`${this.API}/todos/`, data).subscribe(
    )
  }
}
