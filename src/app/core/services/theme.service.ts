import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.storedTheme());

  constructor() {
    effect(() => {
      const t = this.theme();
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('portfolio-theme', t);
    });
  }

  toggle() {
    this.theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }

  private storedTheme(): Theme {
    try {
      const v = localStorage.getItem('portfolio-theme') as Theme | null;
      return v === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  }
}
