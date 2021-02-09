import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public getData(): Observable<{id: number, message: string}[]>{
    return this.http.get<{id: number, message: string}[]>(environment.url + 'data');
  }
}
