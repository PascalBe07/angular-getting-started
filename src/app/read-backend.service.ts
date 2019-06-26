import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadBackendService {

  public getEmployees(): Observable<any[]> {
    //  replace with custom code here
    return of([]);
  }
}
