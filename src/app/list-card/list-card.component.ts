import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from '../task/task.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CompletedTreeComponent } from '../completed-tree/completed-tree.component';
import { CompletedComponent } from "../completed/completed.component";

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    TaskComponent,
    CompletedTreeComponent,
    CompletedComponent
],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss',
})
export class ListCardComponent {}
