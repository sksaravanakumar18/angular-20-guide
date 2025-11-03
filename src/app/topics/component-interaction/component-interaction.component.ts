import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildDemoComponent } from './child-demo/child-demo.component';

@Component({
  selector: 'app-component-interaction',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildDemoComponent],
  template: `
    <h2>3. Component Interaction & Reusability</h2>
    <section class="topic-section">      <header><h3>Parent-Child Communication (&#64;Input & &#64;Output)</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p><b><code>&#64;Input()</code></b>: Allows a parent to pass data <b>down</b> to its child.</p>
          <p><b><code>&#64;Output()</code></b>: Allows a child to emit events <b>up</b> to its parent using an <code>EventEmitter</code>.</p>
          <pre><code>&lt;!-- parent.component.html --&gt;
&lt;app-child 
  [dataFromParent]="parentData" 
  (eventToParent)="handleEvent($event)"&gt;
&lt;/app-child&gt;</code></pre>
        </div>
        <div class="demo">
          <h4>Live Demo</h4>
          <div class="parent-box">
            <h3>Parent Component</h3>
            <input type="text" [(ngModel)]="parentMessage" placeholder="Type message for child" style="width: 90%">
            <app-child-demo 
              [messageFromParent]="parentMessage" 
              (messageEvent)="receiveMessage($event)"/>
            @if (messageFromChild) {
              <p class="feedback">
                Message received from child: <strong>{{ messageFromChild }}</strong>
              </p>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .parent-box { border: 1px solid #28a745; padding: 1rem; border-radius: 4px; }
    .feedback { margin-top: 1rem; background: #e9f7ef; padding: 0.5rem; border-radius: 4px; }
    input { padding: 5px; margin-bottom: 10px; }
  `
})
export class ComponentInteractionComponent {
  parentMessage: string = 'Hello, child!';
  messageFromChild: string = '';
  receiveMessage(message: string) { this.messageFromChild = message; }
}
