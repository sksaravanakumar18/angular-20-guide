import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-performance',
  standalone: true,
  template: `
    <h2>5. Performance & Optimization</h2>
    <section class="topic-section">
      <header><h3>Change Detection Strategy: OnPush</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p><code>ChangeDetectionStrategy.OnPush</code> optimizes performance by limiting when a component is checked for updates. A component with <code>OnPush</code> only re-renders if:</p>
          <ul>
            <li>One of its <code>&#64;Input()</code> properties changes.</li>
            <li>An event handler inside it is triggered.</li>
            <li>An observable it uses via <code>async</code> pipe emits.</li>
            <li>A signal it uses is updated (best performance).</li>
          </ul>
        </div>
        <div class="demo">
          <h4>Live Demo</h4>
          <p>This component uses OnPush. The counter updates because the click event is handled within the component.</p>
          <button (click)="updateCounter()">Click Me</button>
          <p>Counter: <strong>{{ counter }}</strong></p>
        </div>
      </div>
    </section>
    <section class="topic-section">
      <header><h3>SSR & Hydration with &#64;defer</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p>The <code>&#64;defer</code> block is a powerful tool for declarative lazy loading. It defers loading a block of content until a condition is met, improving initial load time.</p>
          <p>It supports triggers like <code>on interaction</code>, <code>on viewport</code>, <code>on timer()</code>, and more.</p>
        </div>
        <div class="demo">
          <h4>&#64;defer Demo</h4>
          <p>The content below will be loaded only when you click the button.</p>
          <button #loadTrigger>Load Deferred Content</button>
          @defer (on interaction(loadTrigger)) {
            <div class="deferred-content">This content was loaded on demand!</div>
          } @placeholder {
            <div class="placeholder">Click the button to load...</div>
          } @loading {
            <div class="loading">Loading...</div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .deferred-content { border: 2px solid green; padding: 1rem; margin-top: 1rem; }
    .placeholder { border: 2px dashed #ccc; padding: 1rem; margin-top: 1rem; }
    .loading { font-style: italic; margin-top: 1rem; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceComponent {
  counter = 0;
  updateCounter() { this.counter++; }
}
