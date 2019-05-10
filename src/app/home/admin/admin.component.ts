import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[]

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.loadAllUsers();
}

  deleteUser(id: number) {
      this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }

}
