import { Component,computed,Input, EventEmitter, Output } from '@angular/core';
import { type User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 get imagePath() { return "assets/users/" + this.user.avatar};

 @Input({required:true}) user!:User;
 @Input({required:true}) selected! :boolean ;
 @Output() select = new EventEmitter(); 

  onSelectusers(){
    this.select.emit(this.user.id);
 }
}
