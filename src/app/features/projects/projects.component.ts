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
  screenshot?: string;
  highlights?: string[];
  links: { labelKey: string; url: string }[];
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
      screenshot: 'assets/images/mateapp-demo.gif',
      links: [{ labelKey: 'projects.view_project', url: '#' }],
    },
    {
      nameKey:   'projects.pedidosimple_name',
      descKey:   'projects.pedidosimple_desc',
      noteKey:   'projects.pedidosimple_note',
      statusKey: 'projects.pedidosimple_status',
      variant:   'development',
      tech:      ['Angular v20', '.NET 10', 'PostgreSQL', 'AWS', 'S3', 'CloudFront', 'Elastic Beanstalk', 'RDS'],
      screenshot: 'assets/images/pedidosimple-demo.gif',
      links: [{ labelKey: 'projects.view_project', url: '#' }],
    },
    {
      nameKey:   'projects.clario_name',
      descKey:   'projects.clario_desc',
      noteKey:   'projects.clario_note',
      statusKey: 'projects.clario_status',
      variant:   'launched',
      tech:      ['Tauri', 'Angular', 'Rust', 'Windows'],
      highlights: ['projects.clario_h1', 'projects.clario_h2', 'projects.clario_h3'],
      links: [
        { labelKey: 'projects.clario_view_ph', url: 'https://www.producthunt.com' },
        { labelKey: 'projects.clario_get', url: '#' },
      ],
    },
    {
      nameKey:   'projects.localconnect_name',
      descKey:   'projects.localconnect_desc',
      noteKey:   'projects.localconnect_note',
      statusKey: 'projects.localconnect_status',
      variant:   'progress',
      tech:      ['Angular v20', '.NET 10', 'PostgreSQL', 'SQLite'],
      links: [],
    },
  ];
}
