import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

interface Project {
  nameKey:   string;
  descKey:   string;
  noteKey:   string;
  statusKey: string;
  variant:   string;
  tech:      string[];
  link:      string | null;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe, BadgeComponent, TagComponent, AnimateOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      nameKey:   'projects.mateapp_name',
      descKey:   'projects.mateapp_desc',
      noteKey:   'projects.mateapp_note',
      statusKey: 'projects.mateapp_status',
      variant:   'development',
      tech:      ['Angular v20', '.NET 10', 'PostgreSQL', 'AWS', 'S3', 'CloudFront'],
      link:      '#',
    },
    {
      nameKey:   'projects.pedidosimple_name',
      descKey:   'projects.pedidosimple_desc',
      noteKey:   'projects.pedidosimple_note',
      statusKey: 'projects.pedidosimple_status',
      variant:   'development',
      tech:      ['Angular v20', '.NET 10', 'PostgreSQL', 'AWS', 'S3', 'CloudFront', 'Elastic Beanstalk', 'RDS'],
      link:      '#',
    },
    {
      nameKey:   'projects.localconnect_name',
      descKey:   'projects.localconnect_desc',
      noteKey:   'projects.localconnect_note',
      statusKey: 'projects.localconnect_status',
      variant:   'progress',
      tech:      ['Angular v20', '.NET 10', 'PostgreSQL', 'SQLite'],
      link:      null,
    },
  ];
}
