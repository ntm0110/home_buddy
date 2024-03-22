import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeListComponent } from './home-list/home-list/home-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
