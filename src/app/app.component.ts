import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from './shared/app-navbar/app-navbar.component';
import { AppFooterComponent } from './shared/app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  imports: [AppNavbarComponent, RouterOutlet, AppFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shruthi-portfolio';
}
