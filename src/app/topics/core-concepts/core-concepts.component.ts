import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Custom Pipe Example
@Pipe({ name: 'initials', standalone: true })
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.split(' ').map(n => n[0]).join('').toUpperCase();
  }
}

@Component({
  selector: 'app-core-concepts',
  standalone: true,
  imports: [CommonModule, FormsModule, InitialsPipe],
  template: `
    <h2>1. Core Architecture & Fundamentals</h2>
    <section class="topic-section">
      <header><h3>Components, Templates & Data Binding</h3></header>
      <div class="content-wrapper">
        <div class="explanation">          <p>A <code>&#64;Component</code> decorator marks a class as an Angular component. The template is its HTML view.</p>
          <p><b>Interpolation:</b> <code>&#123;&#123; userName &#125;&#125;</code> displays a component property.</p>
          <p><b>Property Binding:</b> <code>[id]="..."</code> binds to a DOM element property.</p>
          <p><b>Event Binding:</b> <code>(click)="..."</code> listens for a DOM event.</p>
          <p><b>Two-Way Binding:</b> <code>[(ngModel)]="..."</code> combines property and event binding. Requires <code>FormsModule</code>.</p>
        </div>
        <div class="demo">
          <h4>Live Demo</h4>
          <p>Hello, <strong>{{ userName | initials }}</strong>! Your name is {{ userName.length }} characters long.</p>
          <input type="text" [id]="inputId" [(ngModel)]="userName" style="margin-bottom: 10px; width: 90%">
          <button (click)="resetName()">Reset Name</button>
        </div>
      </div>
    </section>
    <section class="topic-section">
      <header><h3>Directives & Control Flow</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p>Modern Angular uses built-in control flow syntax (<code>&#64;if</code>, <code>&#64;for</code>) which is more performant and readable than the old directives (<code>*ngIf</code>, <code>*ngFor</code>).</p>
          <p><b>Attribute Directives:</b> Change appearance or behavior. E.g., <code>[ngClass]</code>, <code>[ngStyle]</code>.</p>
          <pre><code>&#64;if (isLoggedIn) {{ '{' }}
  &lt;p&gt;Welcome back!&lt;/p&gt;
{{ '}' }} &#64;else {{ '{' }}
  &lt;p&gt;Please log in.&lt;/p&gt;
{{ '}' }}</code></pre>
        </div>
        <div class="demo">
          <h4>Live Demo</h4>
          <button (click)="toggleLogin()">{{ isLoggedIn ? 'Log Out' : 'Log In' }}</button>
          @if (isLoggedIn) {
            <p [ngStyle]="{ color: 'green', 'font-weight': 'bold' }">Welcome back, {{ userName }}!</p>
          } @else {
            <p [ngClass]="'text-danger'">Please log in to see the user list.</p>
          }
          <h4>User List with &#64;for</h4>
          <ul>
            @for (user of users; track user.id; let i = $index) {
              <li [class.even]="i % 2 === 0">{{ user.name }}</li>
            } @empty {
              <li>No users available.</li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    .text-danger { color: red; }
    .even { background-color: #f9f9f9; }
  `
})
export class CoreConceptsComponent {
  userName = 'John Doe';
  inputId = 'user-name-input';
  isLoggedIn = true;
  users = [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ];
  resetName() { this.userName = 'Jane Doe'; }
  toggleLogin() { this.isLoggedIn = !this.isLoggedIn; }
}
