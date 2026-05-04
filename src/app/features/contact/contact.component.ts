import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  name    = signal('');
  email   = signal('');
  message = signal('');
  status  = signal<FormStatus>('idle');

  readonly EMAIL    = 'ivan.vd07@gmail.com';
  readonly LINKEDIN = '#placeholder';
  readonly GITHUB   = '#placeholder';

  async submit(e: Event) {
    e.preventDefault();
    this.status.set('sending');

    try {
      const res = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: this.name(),
          email: this.email(),
          message: this.message(),
        }),
      });
      this.status.set(res.ok ? 'success' : 'error');
    } catch {
      this.status.set('error');
    }
  }

  get isSending() { return this.status() === 'sending'; }
  get isSuccess() { return this.status() === 'success'; }
  get isError()   { return this.status() === 'error'; }
}
