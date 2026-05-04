import { Injectable, signal } from '@angular/core';
import en from '../../i18n/en.json';
import es from '../../i18n/es.json';

export type Language = 'en' | 'es';

type Dict = Record<string, unknown>;
const translations: Record<Language, Dict> = { en: en as Dict, es: es as Dict };

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Language>('en');

  toggle() {
    this.lang.update(l => (l === 'en' ? 'es' : 'en'));
  }

  t(key: string): string {
    const parts = key.split('.');
    let node: unknown = translations[this.lang()];
    for (const part of parts) {
      if (node && typeof node === 'object' && part in (node as Dict)) {
        node = (node as Dict)[part];
      } else {
        return key;
      }
    }
    return typeof node === 'string' ? node : key;
  }
}
