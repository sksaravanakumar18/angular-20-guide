import { Component } from '@angular/core';

@Component({
  selector: 'app-modern-features',
  standalone: true,
  template: `
    <h2>6. Modern Angular Enhancements</h2>
    <section class="topic-section">
      <header><h3>New Control Flow Syntax: &#64;switch</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p>In addition to <code>&#64;if</code> and <code>&#64;for</code>, Angular has <code>&#64;switch</code> for multi-conditional logic, which is cleaner than multiple <code>&#64;if</code> blocks.</p>
        </div>
        <div class="demo">
          <h4>&#64;switch Demo</h4>
          <div>
            <button (click)="setStatus('loading')" style="margin-right: 5px">Set Loading</button>
            <button (click)="setStatus('loaded')" style="margin-right: 5px">Set Loaded</button>
            <button (click)="setStatus('error')" style="margin-right: 5px">Set Error</button>
          </div>
          <div class="status-box">
            @switch (status) {
              @case ('loading') { <p>Loading data...</p> }
              @case ('loaded') { <p style="color: green;">Data loaded successfully!</p> }
              @case ('error') { <p style="color: red;">An error occurred.</p> }
              @default { <p>Status is unknown.</p> }
            }
          </div>
        </div>
      </div>
    </section>
    <section class="topic-section">
      <header><h3>Vite Dev Server & Self-Closing Tags</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p><b>Vite + esbuild:</b> Since Angular 17, Vite is the default dev server, providing near-instant server startup and Hot Module Replacement (HMR).</p>
          <p><b>Self-closing tags:</b> You can now use self-closing tags for components, which cleans up templates.</p>
          <pre><code>&lt;!-- Old --&gt;
&lt;app-my-component&gt;&lt;/app-my-component&gt;
&lt;!-- New --&gt;
&lt;app-my-component /&gt;</code></pre>
        </div>
        <div class="demo">
          <p>You are experiencing the speed of <b>Vite</b> right now! The fast startup of <code>ng serve</code> is a direct result of this change.</p>
          <p>The component interaction demo used a self-closing tag for the child component.</p>
        </div>
      </div>
    </section>
  `,
  styles: ` .status-box { margin-top: 1rem; border: 1px solid #ccc; padding: 0 1rem; } `
})
export class ModernFeaturesComponent {
  status: 'loading' | 'loaded' | 'error' = 'loaded';
  setStatus(newStatus: 'loading' | 'loaded' | 'error') { this.status = newStatus; }
}
