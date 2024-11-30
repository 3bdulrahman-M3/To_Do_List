import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl:'./task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!: Task;
@Output() Complete = new EventEmitter<string>();
  onCompleteTask (){
    this.Complete.emit(this.task.id);
  }
}
