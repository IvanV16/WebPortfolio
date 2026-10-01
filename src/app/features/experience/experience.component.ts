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

  sistedClients = signal<ClientEntry[]>([
    {
      prefix: 'pricose',
      tech: [
        '.NET 10',
        'ASP.NET Core',
        'ABP Framework',
        'Blazor WebAssembly',
        'DDD',
        'EF Core',
        'SQL Server',
        'Azure',
        'SignalR',
        'Redis',
        'Hangfire',
        '.NET Aspire',
      ],
      expanded: false,
      bullets: ['b1', 'b2', 'b3'],
    },
  ]);

  clients = signal<ClientEntry[]>([
    {
      prefix: 'sita',
      tech: ['.NET Framework', 'WinForms', 'C#', 'WCF', 'SQL Server', 'MVVM', 'Infragistics'],
      expanded: false,
      bullets: ['b1', 'b2', 'b3', 'b4'],
    },
    {
      prefix: 'sa',
      tech: ['.NET Core 3.1', 'ASP.NET Core', 'AngularJS', 'SQL Server', 'HL7', 'IIS'],
      expanded: false,
      bullets: ['b1', 'b2', 'b3', 'b4'],
    },
    {
      prefix: 'hst',
      tech: ['.NET', 'ASP.NET Core', 'Angular 8-10', 'AngularJS', 'REST APIs', 'Webhooks'],
      expanded: false,
      bullets: ['b1', 'b2'],
    },
    {
      prefix: 'proactive',
      tech: ['.NET Core', 'ASP.NET Core', 'AngularJS', 'Angular 8-12', 'SQL Server'],
      expanded: false,
      bullets: ['b1', 'b2', 'b3'],
    },
    {
      prefix: 'internal',
      tech: ['.NET / ASP.NET Core', 'Angular (v13-15, v18, v20)', 'SQL Server', 'PostgreSQL'],
      expanded: false,
      bullets: ['b1', 'b2', 'b3', 'b4'],
    },
  ]);

  toggle(index: number) {
    this.clients.update(list =>
      list.map((c, i) => (i === index ? { ...c, expanded: !c.expanded } : c))
    );
  }

  toggleSisted(index: number) {
    this.sistedClients.update(list =>
      list.map((client, i) => (i === index ? { ...client, expanded: !client.expanded } : client))
    );
  }

  tk(prefix: string, suffix: string): string {
    return this.i18n.t(`experience.${prefix}_${suffix}`);
  }
}
