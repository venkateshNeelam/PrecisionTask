import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-task-progress',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './task-progress.component.html',
  styleUrl: './task-progress.component.scss'
})
export class TaskProgressComponent {

}
