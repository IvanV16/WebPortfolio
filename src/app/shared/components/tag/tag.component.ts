import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  template: `<span class="tag">{{ text() }}</span>`,
  styles: [`
    .tag {
      display: inline-flex;
      align-items: center;
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-sm);
      font-size: var(--text-xs);
      font-weight: 500;
      font-family: var(--font-mono);
      background: var(--bg-tertiary);
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
      transition: color var(--transition), border-color var(--transition);

      &:hover {
        color: var(--accent);
        border-color: var(--accent-glow);
      }
    }
  `]
})
export class TagComponent {
  text = input.required<string>();
}
