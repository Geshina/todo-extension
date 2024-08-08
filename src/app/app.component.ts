import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import {
  MatSidenavContainer,
  MatSidenavContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { ListCardComponent } from './list-card/list-card.component';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidenavComponent,
    MatButtonModule,
    MatIcon,
    MatToolbar,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenavModule,
    ListCardComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
