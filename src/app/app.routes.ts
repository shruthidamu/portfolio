import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/homepage/homepage.component').then((m) => m.HomepageComponent),
    title: 'Home',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Projects',
  },
  {
    path: 'experiences',
    loadComponent: () => import('./pages/experiences/experiences.component').then((m) => m.ExperiencesComponent),
    title: 'Experience',
  },
  {
    path: 'publications',
    loadComponent: () => import('./pages/publications/publications.component').then((m) => m.PublicationsComponent),
    title: 'Publications',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact',
  },
  { path: '**', redirectTo: '' },
];
