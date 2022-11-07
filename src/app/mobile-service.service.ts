import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mobile } from './mobile';
@Injectable({
  providedIn: 'root',
})
export class MobileServiceService {
  constructor(private http: HttpClient) {}
  private firsturl = 'http://localhost:3000';
  getAllData() {
    return this.http.get(`${this.firsturl}/Mobile`);
  }
  deleteAllMobiledata(id:Number){
    return this.http.delete(`${this.firsturl}/Mobile`+"/"+id);
  }
}
