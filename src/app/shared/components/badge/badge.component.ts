import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<span class="badge" [attr.data-variant]="variant()">{{ text() }}</span>`,
  styles: [`
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 0.2rem 0.65rem;
      border-radius: var(--radius-full);
      font-size: var(--text-xs);
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;

      &[data-variant='development'] {
        background: rgba(16, 185, 129, 0.12);
        color: #10B981;
        border: 1px solid rgba(16, 185, 129, 0.25);
      }
      &[data-variant='progress'] {
        background: rgba(245, 158, 11, 0.12);
        color: #F59E0B;
        border: 1px solid rgba(245, 158, 11, 0.25);
      }
      &[data-variant='launched'] {
        background: rgba(168, 85, 247, 0.14);
        color: #C084FC;
        border: 1px solid rgba(168, 85, 247, 0.32);
      }
      &[data-variant='default'],
      &:not([data-variant]) {
        background: var(--accent-subtle);
        color: var(--accent);
        border: 1px solid rgba(59, 130, 246, 0.2);
      }
    }
  `]
})
export class BadgeComponent {
  text    = input.required<string>();
  variant = input<string>('default');
}

