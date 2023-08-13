import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  @Input() user?: User;
  @Output() usersUpdated = new EventEmitter<User[]>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  saveUser(user: User) {
    this.userService
      .saveUser(user)
      .subscribe((users: User[]) => this.usersUpdated.emit(users));

      alert("User saved!");
  }


}
