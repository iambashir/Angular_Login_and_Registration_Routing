import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private userSerice: UserService, private route: Router) { }

  ngOnInit() {
  }

  public signin(): void {
    console.log("clicked**********");
    this.route.navigateByUrl('/dashboard/home');
  }

  public registration(): void {
    console.log("clicked**********");
    this.route.navigateByUrl('/registration');
  }

}
