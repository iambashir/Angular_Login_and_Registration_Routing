import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }
  
  registerUser(data){
    this.http.post(this.url, {
      name : data.name,
      username : data.username,
      password : data.password
    }).toPromise();
    // data.name = "";
    // data.username = "";
    // data.password = "";
  }

  loginUser(data){
    return this.http.get(this.url);
  }
}
