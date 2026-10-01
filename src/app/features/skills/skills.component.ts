import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

interface SkillGroup {
  labelKey: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, TagComponent, AnimateOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      labelKey: 'skills.frontend',
      items: [
        'Angular (v8-20)',
        'AngularJS',
        'Blazor WebAssembly',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'Bootstrap',
        'Angular Material',
        'PrimeNG',
      ],
    },
    {
      labelKey: 'skills.backend',
      items: [
        '.NET Framework',
        '.NET Core',
        '.NET 5/6/8/10',
        'ASP.NET Core',
        'ASP.NET MVC',
        'ABP Framework',
        'Entity Framework / EF Core',
        'WCF',
        'RESTful APIs',
        'SignalR',
      ],
    },
    {
      labelKey: 'skills.database',
      items: ['SQL Server', 'PostgreSQL', 'SQLite'],
    },
    {
      labelKey: 'skills.cloud',
      items: ['AWS', 'Microsoft Azure', 'Azure DevOps', 'CI/CD Pipelines', 'Docker', 'IIS'],
    },
    {
      labelKey: 'skills.versionControl',
      items: ['Git', 'Bitbucket', 'TFS'],
    },
    {
      labelKey: 'skills.tools',
      items: [
        'Clean Architecture',
        'Domain-Driven Design (DDD)',
        'SOLID Principles',
        'MVC',
        'MVVM',
        'Repository Pattern',
        'Unit of Work',
        'CQRS',
        'MediatR',
        'Agile Scrum',
        'Unit & Integration Testing',
      ],
    },
    {
      labelKey: 'skills.devTools',
      items: ['AI-assisted development', 'ChatGPT', 'Codex', 'Claude', 'Claude Code', 'Cursor'],
    },
  ];
}
