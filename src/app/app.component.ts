import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  standalone: true,
  imports: [ RouterModule, HomeComponent ]
})
export class AppComponent {
  title = 'inquiry-app';
}

