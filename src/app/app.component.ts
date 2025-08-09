import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TaskProgressComponent } from './task-progress/task-progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskProgressComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PrecisionTask';
  showFiller = false;
}
