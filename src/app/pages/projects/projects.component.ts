import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

type ProjectCategory = 'Personal Project' | 'Professional Case Study';

interface PortfolioProject {
  title: string;
  category: ProjectCategory;
  summary: string;
  technologies: string[];
  highlights: string[];
  featured?: boolean;
  demoUrl?: string;
  sourceUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeFilter = 'All';

  readonly filters = [
    'All',
    'Personal Projects',
    'Professional Case Studies',
  ];

  readonly projects: PortfolioProject[] = [
    {
      title: 'Product Explorer',
      category: 'Personal Project',
      summary:
        'A product discovery application built to practise modern Angular patterns, reactive state management, and reusable UI development.',
      technologies: [
        'Angular 17',
        'TypeScript',
        'NgRx Signal Store',
        'REST API',
        'SCSS',
      ],
      highlights: [
        'Implemented product loading with loading and error states.',
        'Added search and category-based filtering.',
        'Built pagination and a product details modal.',
        'Used computed state to derive filtered product data.',
      ],
      featured: true,
      demoUrl: 'https://shruthidamu.github.io/product-explorer/',
      sourceUrl: 'https://github.com/shruthidamu/product-explorer',
    },
    {
      title: 'Enterprise Commerce Applications',
      category: 'Professional Case Study',
      summary:
        'Frontend delivery across enterprise commerce applications, including BackOffice workflows, self-checkout interfaces, and application modernisation.',
      technologies: [
        'Angular',
        'React',
        'JavaScript',
        'TypeScript',
        'HTML',
        'SCSS',
      ],
      highlights: [
        'Contributed to enterprise BackOffice and point-of-sale interfaces.',
        'Worked on Angular-to-React UI modernisation.',
        'Delivered Customer Data Management and Coupon Management features.',
        'Supported UI reviews, technical guidance, and collaboration across a 15-member team.',
      ],
    },
    {
      title: 'DevHub — Developer Productivity Platform',
      category: 'Professional Case Study',
      summary:
        'An internal developer productivity platform designed in Figma and implemented using Angular 14, translating user experience concepts into a functional enterprise application.',
      technologies: [
        'Angular 14',
        'TypeScript',
        'Figma',
        'HTML',
        'SCSS',
        'UI Development',
      ],
      highlights: [
        'Designed the user interface and screen layouts in Figma.',
        'Translated design concepts and user workflows into Angular 14 components.',
        'Worked across the design-to-development process, from visualisation to implementation.',
        'Focused on delivering a consistent, maintainable interface for an internal developer-facing platform.',
      ],
    },
    {
      title: 'Travel Platform UI Modernisation',
      category: 'Professional Case Study',
      summary:
        'Modernising travel platform interfaces across flight and hotel experiences, alongside exploring an upgrade of the BackOffice configuration module to Angular 19.',
      technologies: [
        'Angular 19',
        'JavaScript',
        'TypeScript',
        'HTML',
        'SCSS',
        'Frontend Modernisation',
      ],
      highlights: [
        'Worked on migrating the BackOffice configuration module towards Angular 19, modernising the frontend foundation for future enhancements.',
        'Evaluated the benefits of a modern Angular framework for a configuration-driven module supporting service providers, regions, currencies, and fraud-related IP settings.',
        'Contributed to flight and hotel UI redesigns, including hotel and holiday pages.',
        'Restructured SCSS to improve styling organisation and maintainability.',
        'Collaborated with a three-member team on redesign delivery and supported production issues.',
      ],
    },
  ];

  get visibleProjects(): PortfolioProject[] {
    if (this.activeFilter === 'Personal Projects') {
      return this.projects.filter(
        (project) => project.category === 'Personal Project',
      );
    }

    if (this.activeFilter === 'Professional Case Studies') {
      return this.projects.filter(
        (project) => project.category === 'Professional Case Study',
      );
    }

    return this.projects;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}