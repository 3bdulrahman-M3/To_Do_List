import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksComponent } from '../tasks.component';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input ({required:true}) userId!: string;

@Output() Close = new EventEmitter<void>();
@Output() Add = new EventEmitter<NewTaskData>();
enterTitle ='';
enterSummary ='';
enterDate ='';

private tasksService = inject(TasksService);
onClose(){
  this.Close.emit();
}

onCloseAddTask() {
  this.onClose;
}
onSubmit(){
  this.tasksService.addTask({
    title: this.enterTitle,
    summary: this.enterSummary,
    date: this.enterDate
  },this.userId);
  this.onClose();
}
}
