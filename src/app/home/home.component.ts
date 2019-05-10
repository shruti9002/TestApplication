import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        
    }

    ngOnInit() {
        let getUser =   JSON.parse(localStorage.getItem('currentUser'));
        if(getUser != null && getUser != undefined){
           this.currentUser = getUser
        }
    }

}
