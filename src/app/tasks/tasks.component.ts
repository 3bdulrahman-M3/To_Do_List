import { TasksService } from './tasks.service';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name!: string;
  @Input({required:true}) userId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService){}

get selectedUserTask(){
  return this.tasksService.getUserTask(this.userId);
}

onCompleteTask(id : string){
  this.tasksService.removeTask(id);
}
onStartaddTask(){
  this.isAddingTask = true;
} 
onCloseAddTask(){
  this.isAddingTask = false;
}

}
