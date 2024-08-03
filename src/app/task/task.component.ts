import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SubtaskComponent } from '../subtask/subtask.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [SubtaskComponent, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {}
