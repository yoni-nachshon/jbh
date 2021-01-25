import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private gitApi = 'https://api.github.com/users/'
  

  constructor(private httpClient:HttpClient) { }

  get(userName:string):Observable<any> {
    return this.httpClient.get(this.gitApi+userName);
  }
}

