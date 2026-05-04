import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

export interface ClientEntry {
  prefix: string;
  tech: string[];
  expanded: boolean;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe, TagComponent, AnimateOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private i18n = inject(I18nService);

  clients = signal<ClientEntry[]>([
    {
      prefix: 'sita',
      tech: ['.NET', 'WPF', 'C#', 'REST API', 'SOAP'],
      expanded: false,
      bullets: ['b1', 'b2', 'b3'],
    },
    {
      prefix: 'proactive',
      tech: ['Angular', '.NET Core', 'SQL Server', 'Entity Framework', 'Agile'],
      expanded: false,
      bullets: ['b1', 'b2', 'b3'],
    },
    {
      prefix: 'hst',
      tech: ['Angular', 'ASP.NET Core', 'SQL Server', 'TypeScript'],
      expanded: false,
      bullets: ['b1', 'b2', 'b3'],
    },
    {
      prefix: 'sa',
      tech: ['Angular', '.NET', 'SQL Server', 'REST API'],
      expanded: false,
      bullets: ['b1', 'b2', 'b3'],
    },
  ]);

  toggle(index: number) {
    this.clients.update(list =>
      list.map((c, i) => (i === index ? { ...c, expanded: !c.expanded } : c))
    );
  }

  tk(prefix: string, suffix: string): string {
    return this.i18n.t(`experience.${prefix}_${suffix}`);
  }
}
