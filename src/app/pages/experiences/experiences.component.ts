
import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  initial: string;
  technologies: string[];
  highlights: string[];
  projects?: string[];
  expanded: boolean;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      company: 'TravelUp Tourism LLC',
      role: 'Frontend Developer',
      location: 'Dubai, UAE',
      period: 'February 2025 – July 2026',
      initial: 'T',
      technologies: ['JavaScript', 'HTML5', 'SCSS', 'Angular'],
      highlights: [
        'Contributed to the Flights and Hotels redesign, improving CSS/SCSS maintainability.',
        'Worked on Seatmap features including Lockup and Recommended Fare.',
        'Contributed to the BackOffice Configuration module migration to Angular.',
        'Revamped the Manage My Booking homepage and resolved production issues.',
        'Provided regular frontend status updates to leadership.',
      ],
      projects: [
        'Core application - Travel Up',
        'Backoffice'
      ],
      expanded: false,
    },
    
    {
      company: 'Manhattan Associates',
      role: 'Senior Software Engineer',
      location: 'Bangalore, India',
      period: 'April 2024 – January 2025',
      initial: 'M',
      technologies: [
        'Angular 14',
        'TypeScript',
        'Figma',
        'HTML5',
        'CSS3',
      ],
      highlights: [
        'Owned frontend development for DevHub, an internal developer productivity platform, taking UI work from Figma wireframing and product vision through implementation.',
        'Collaborated with stakeholders, architects and product leadership on requirements, prioritization, sprint delivery and roadmap decisions.',
        'Built the Customer Information dashboard UI for One Board based on product requirements.',
        'Partnered with Business Analysts to implement Template Notes and Billing Address features for JJill, addressing compliance and customer service requirements.',
        'Participated in Wirepath requirement discussions, translating user stories into UI features and developing Manual Shipment Handling and Serial Number Capture.',
      ],
      projects: [
        'DevHub',
        'One Board',
        'JJill - Call Center UI',
        'Wirepath Home Systems - Store UI',
      ],
      expanded: false,
    },    
    {
      company: 'Tata Consultancy Services',
      role: 'Frontend Developer | Product-focused contributor',
      location: 'Bangalore, India',
      period: 'January 2020 – March 2024',
      initial: 'T',
      technologies: [
        'Angular 5 / 15',
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
      ],
      highlights: [
        'Partnered with Product Managers, Architects and Business Stakeholders to deliver responsive interfaces and translate business requirements into UI solutions.',
        'Contributed to requirement grooming, BackOffice self-checkout and UI improvements for Customer Data Management and Coupon Management.',
        'Developed the Admin application using React and led the modernization of legacy AngularJS modules through migration to React.',
        'Managed functional validation of migrated applications, prepared test plans and coordinated delivery planning with Scrum Masters.',
        'Participated across the SDLC and Agile delivery, collaborating with Product Owners on feature delivery, defect resolution and design decisions.',
        'Led and mentored a team of 15 developers, providing technical guidance, conducting UI reviews and supporting delivery and onboarding.',
      ],
      projects: [
        'OmniStore',
        'BackOffice',
        'Self-checkout',
        'Enterprice Console',
        'Point Of Sales',
        'Coupon Management',
      ],
      expanded: false,
    },
    {
      company: 'CMR Institute of Technology',
      role: 'Teaching Assistant',
      location: 'Bangalore, India',
      period: 'August 2018 – November 2019',
      initial: 'C',
      technologies: [
        'C Programming',
        'Placement Training',
        'Technical Instruction',
      ],
      highlights: [
        'Conducted C Programming labs and placement training.',
        'Taught Storage Area Network and Mobile Application Development.',
      ],
      expanded: false,
    },
  ];

  
toggleExperience(index: number): void {
  this.experiences = this.experiences.map((experience, i) => ({
    ...experience,
    expanded: i === index ? !experience.expanded : false,
  }));
}

}