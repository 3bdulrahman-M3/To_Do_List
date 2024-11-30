import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  users = DUMMY_USERS;
  selectedUserId? : string;
  
  get selectedUser() { 
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectusers(id:string){ 
    this.selectedUserId = id;  
  };
}