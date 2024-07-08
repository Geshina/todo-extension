import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import {
  MatSidenavContainer,
  MatSidenavContent,
  MatSidenav,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ListCardComponent } from './list-card/list-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    SidenavComponent,
    ListCardComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
