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
      items: ['Angular (v8–20)', 'TypeScript', 'JavaScript', 'AngularJS', 'HTML5', 'CSS3 / SCSS'],
    },
    {
      labelKey: 'skills.backend',
      items: ['.NET Framework', '.NET Core', '.NET 5/6/8/10', 'ASP.NET Core', 'Entity Framework', 'RESTful APIs'],
    },
    {
      labelKey: 'skills.database',
      items: ['SQL Server', 'PostgreSQL', 'SQLite'],
    },
    {
      labelKey: 'skills.cloud',
      items: ['AWS', 'S3 / CloudFront', 'Elastic Beanstalk', 'RDS', 'Azure', 'CI/CD Pipelines'],
    },
    {
      labelKey: 'skills.tools',
      items: ['Git', 'Clean Architecture', 'SOLID Principles', 'Agile / Scrum', 'AI-assisted dev'],
    },
  ];
}
