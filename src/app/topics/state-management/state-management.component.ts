import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-state-management',
  standalone: true,
  template: `
    <h2>4. State Management with Signals</h2>
    <section class="topic-section">
      <header><h3>Angular Signals (Modern & Built-in)</h3></header>
      <div class="content-wrapper">
        <div class="explanation">
          <p>Signals are the modern reactive primitive in Angular for managing state. They provide efficient, fine-grained change detection.</p>
          <p><b><code>signal()</code></b>: Creates a writable signal, a container for a value that can change.</p>
          <p><b><code>computed()</code></b>: Creates a derived signal that recalculates its value only when its dependencies change.</p>
          <p><b><code>effect()</code></b>: Runs a side-effect whenever one or more signal values change.</p>
        </div>
        <div class="demo">
          <h4>Shopping Cart Demo</h4>
          <p>
            Quantity: 
            <button (click)="decrement()" style="margin: 0 5px">-</button>
            <strong>{{ quantity() }}</strong>
            <button (click)="increment()" style="margin: 0 5px">+</button>
          </p>
          <p>Unit Price: $50</p>
          <p>Total Price (computed): <strong>\${{ totalPrice() }}</strong></p>
          <p><i>(Check the console for effect logs)</i></p>
        </div>
      </div>
    </section>
  `
})
export class StateManagementComponent {
  quantity = signal(1);
  totalPrice = computed(() => this.quantity() * 50);

  constructor() {
    effect(() => {
      console.log(`Signal Effect: Quantity is ${this.quantity()}. New total is $${this.totalPrice()}`);
    });
  }

  increment() { this.quantity.update(q => q + 1); }
  decrement() { this.quantity.update(q => (q > 0 ? q - 1 : 0)); }
}
