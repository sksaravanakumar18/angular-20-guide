import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  standalone: true,
  template: `
    <div class="child-box">
      <h4>Child Component</h4>
      <p>Message from parent: <strong>{{ messageFromParent }}</strong></p>
      <button (click)="sendMessageToParent()">Send Message to Parent</button>
    </div>
  `,
  styles: `.child-box { border: 1px solid #007bff; padding: 1rem; border-radius: 4px; }`
})
export class ChildDemoComponent {
  @Input() messageFromParent: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageEvent.emit('Hello from the Child!');
  }
}
