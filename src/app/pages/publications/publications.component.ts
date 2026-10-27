import { Component } from '@angular/core';

interface Publication {
  title: string,
  conference: string,
  location?: string,
  year: number,
  topic: string,
  number: string,
  url?: string
}

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
})
export class PublicationsComponent {
  readonly publications: Publication[] = [
    {
      number: '01',
      title:
        'Privacy Preserving Multi-Keyword Ranked Search over Group Shared Encrypted Cloud Data using Ternary Tree',
      conference: 'ICRCET-18',
      location: 'Pune',
      year: 2018,
      topic: 'Cloud Computing & Data Privacy',
    },
    {
      number: '02',
      title:
        'Verifiable Privacy Preserving Multi-Keyword Ranked Search over Encrypted Cloud Data and Data Supported Synonym Query',
      conference: 'KETCON-2018',
      location: 'Kodakara',
      year: 2018,
      topic: 'Information Security & Search',
    },
    {
      number: '03',
      title: 'Human Computer Interaction: Study of Disabled Users',
      conference: 'nCORETech-2017',
      year: 2017,
      topic: 'Human-Computer Interaction & Accessibility',
      url: 'https://ijarcce.com/papers/nolink_human-computer-interaction-study-of-disabled-users/'
    },
  ];
}