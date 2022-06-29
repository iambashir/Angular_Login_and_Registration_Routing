import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userSerice: UserService) { }

  ngOnInit() {
  }

  registerUser(data){
    this.userSerice.registerUser(data);
  }



}
