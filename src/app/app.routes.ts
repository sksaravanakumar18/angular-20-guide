import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  {
    path: 'core',
    loadComponent: () => import('./topics/core-concepts/core-concepts.component').then(m => m.CoreConceptsComponent),
    title: 'Core Architecture'
  },
  {
    path: 'tooling',
    loadComponent: () => import('./topics/language-tooling/language-tooling.component').then(m => m.LanguageToolingComponent),
    title: 'Language & Tooling'
  },
  {
    path: 'interaction',
    loadComponent: () => import('./topics/component-interaction/component-interaction.component').then(m => m.ComponentInteractionComponent),
    title: 'Component Interaction'
  },
  {
    path: 'state',
    loadComponent: () => import('./topics/state-management/state-management.component').then(m => m.StateManagementComponent),
    title: 'State Management'
  },
  {
    path: 'performance',
    loadComponent: () => import('./topics/performance/performance.component').then(m => m.PerformanceComponent),
    title: 'Performance'
  },
  {
    path: 'modern',
    loadComponent: () => import('./topics/modern-features/modern-features.component').then(m => m.ModernFeaturesComponent),
    title: 'Modern Angular'
  },
  {
    path: 'skills',
    loadComponent: () => import('./topics/cross-cutting/cross-cutting.component').then(m => m.CrossCuttingComponent),
    title: 'Cross-Cutting Skills'
  },
  { path: '**', redirectTo: 'core' } // Wildcard route
];
