import { Component } from '@angular/core';

@Component({
  selector: 'app-language-tooling',
  standalone: true,
  template: `
    <h2>2. Angular Language & Tooling</h2>
    <section class="topic-section">
      <header><h3>TypeScript Essentials</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p>TypeScript is a superset of JavaScript that adds static types, improving code quality and maintainability.</p>
          <p><b>Interfaces:</b> Define contracts for object shapes.</p>
          <p><b>Generics:</b> Create reusable components that can work over a variety of types.</p>
          <p><b>Decorators:</b> Functions that modify classes or properties (e.g., <code>&#64;Component</code>).</p>
        </div>
        <div class="demo">
          <h4>Code Example</h4>
          <pre><code>interface User {{ '{' }}
  id: number;
  name: string;
{{ '}' }}

function identity&lt;T&gt;(arg: T): T {{ '{' }}
  return arg;
{{ '}' }}

let user: User = {{ '{' }} id: 1, name: 'Demo User' {{ '}' }};</code></pre>
          <p>Check the browser's developer console to see the logged output from this component's constructor.</p>
        </div>
      </div>
    </section>
    <section class="topic-section">
      <header><h3>Angular CLI</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p>The Angular CLI is essential for initializing, developing, scaffolding, and maintaining Angular applications.</p>
          <ul>
            <li><code>ng new [name]</code>: Creates a new project.</li>
            <li><code>ng serve</code>: Serves the app with a live-reloading dev server (Vite).</li>
            <li><code>ng build</code>: Compiles the app for production.</li>
            <li><code>ng generate component [name]</code>: Creates a new component.</li>
          </ul>
        </div>
        <div class="demo">
          <h4>This App is Built with the CLI!</h4>
          <p>This project was created with:</p>
          <pre><code>ng new angular-20-guide --standalone --style=scss --routing</code></pre>
          <p>Each topic component was generated with a similar command.</p>
        </div>
      </div>
    </section>
  `
})
export class LanguageToolingComponent {
  constructor() {
    interface User { id: number; name: string; }
    const user: User = { id: 1, name: 'Demo User' };
    console.log('TypeScript User Object from LanguageToolingComponent:', user);
  }
}
