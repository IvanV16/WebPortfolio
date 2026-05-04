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
  readonly LINKEDIN = 'https://www.linkedin.com/in/ivan-vallejos-716a1415b';
  readonly GITHUB   = 'https://github.com/IvanV16';

  submit(e: Event) {
    e.preventDefault();
    this.status.set('sending');

    try {
      const subject = encodeURIComponent(`Portfolio contact from ${this.name()}`);
      const body = encodeURIComponent(
        `Name: ${this.name()}\nEmail: ${this.email()}\n\nMessage:\n${this.message()}`
      );
      window.location.href = `mailto:${this.EMAIL}?subject=${subject}&body=${body}`;
      this.status.set('success');
    } catch {
      this.status.set('error');
    }
  }

  get isSending() { return this.status() === 'sending'; }
  get isSuccess() { return this.status() === 'success'; }
  get isError()   { return this.status() === 'error'; }
}
