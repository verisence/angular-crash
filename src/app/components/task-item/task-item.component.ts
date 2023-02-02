import { Component, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { faDeleteLeft, faDemocrat } from '@fortawesome/free-solid-svg-icons';
import { faDhl } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task
  faDelete = faDeleteLeft

}
