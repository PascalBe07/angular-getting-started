import { Component, OnInit } from '@angular/core';
import { ReadBackendService } from '../read-backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employeesObservable: Observable<any[]>;

  constructor(private readService: ReadBackendService) { }

  ngOnInit() {
    this.employeesObservable = this.readService.getEmployees();
  }

}
