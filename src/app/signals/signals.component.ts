import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  // counter = 0;
  counter = signal(0);

  increment() {
    // this.counter++;
    this.counter.update((oldValue)=>oldValue++);
    this.actions.push('INCREMENT');
  }

  decrement() {
    // this.counter--;
    this.counter.update((oldValue)=>oldValue--);
    this.actions.push('DECREMENT');
  }
}
