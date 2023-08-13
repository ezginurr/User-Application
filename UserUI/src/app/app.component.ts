import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserUI';
  users: User[] = [];
  userToEdit?: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((result: User[]) => (this.users = result));
  }

  initNewUser() {
    this.userToEdit = new User();
  }

  updateUserList(users: User[]) {
    this.users = users;
  }

}

