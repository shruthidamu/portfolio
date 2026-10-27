import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly email = 'shruthidamu433499@gmail.com';
  readonly linkedInUrl = 'https://www.linkedin.com/in/shruthi-damodaran-6026b9143';
  readonly githubUrl = 'https://github.com/shruthidamu';
}
