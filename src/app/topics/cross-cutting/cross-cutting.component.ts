import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-cross-cutting',
  standalone: true,
  template: `
    <h2>7. Cross-Cutting Skills</h2>
    <section class="topic-section">
      <header><h3>Security: XSS Prevention & Sanitization</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p>Angular helps prevent Cross-Site Scripting (XSS) by automatically sanitizing values bound to properties like <code>innerHTML</code>. It removes unsafe code like <code>&lt;script&gt;</code> tags.</p>
          <p>To render HTML you absolutely trust, use the <code>DomSanitizer</code> service.</p>
        </div>
        <div class="demo">
          <h4>Live Demo</h4>
          <p><strong>Unsafe HTML (sanitized by Angular):</strong></p>
          <div [innerHTML]="htmlSnippet"></div>
          <p><strong>Trusted HTML (using DomSanitizer):</strong></p>
          <div [innerHTML]="trustedHtml"></div>
        </div>
      </div>
    </section>
    <section class="topic-section">
      <header><h3>Accessibility (a11y)</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p>Accessibility ensures your app can be used by everyone. Key practices include:</p>
          <ul>
            <li>Using semantic HTML (<code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>).</li>
            <li>Using ARIA attributes like <code>aria-label</code> for context.</li>
            <li>Ensuring proper color contrast and keyboard navigation.</li>
          </ul>
        </div>
        <div class="demo">
          <h4>ARIA Example</h4>
          <p>This button has an <code>aria-label</code> that a screen reader would announce, providing more context than just "X".</p>
          <button aria-label="Close dialog">X</button>
        </div>
      </div>
    </section>
  `
})
export class CrossCuttingComponent {
  htmlSnippet = `An example with a <script>alert('XSS Attack!')</script> tag.`;
  trustedHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    const trustedSnippet = `This <strong>HTML</strong> is trusted.`;
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(trustedSnippet);
  }
}
