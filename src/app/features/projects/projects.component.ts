import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

interface Project {
  nameKey:   string;
  descKey:   string;
  noteKey:   string;
  note2Key?: string;
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
      links: [
        { labelKey: 'projects.view_project', url: 'https://dka445csg0xbb.cloudfront.net/' },
        { labelKey: 'projects.view_admin_side', url: 'https://dka445csg0xbb.cloudfront.net/login' },
      ],
    },
    {
      nameKey:   'projects.pedidosimple_name',
      descKey:   'projects.pedidosimple_desc',
      noteKey:   'projects.pedidosimple_note',
      statusKey: 'projects.pedidosimple_status',
      variant:   'development',
      tech:      ['Angular v20', '.NET 10', 'PostgreSQL', 'AWS', 'S3', 'CloudFront', 'Elastic Beanstalk', 'RDS'],
      screenshot: 'assets/images/pedidosimple-demo.gif',
      links: [
        { labelKey: 'projects.view_project', url: 'https://mundografico.pedidosimple.net/' },
        { labelKey: 'projects.view_admin_side', url: 'https://mundografico.pedidosimple.net/admin/login' },
      ],
    },
    {
      nameKey:   'projects.clario_name',
      descKey:   'projects.clario_desc',
      noteKey:   'projects.clario_note',
      statusKey: 'projects.clario_status',
      variant:   'launched',
      tech:      ['Tauri', 'Angular', 'Rust', 'Windows'],
      screenshot: 'assets/images/clario-demo.gif',
      highlights: ['projects.clario_h1', 'projects.clario_h2', 'projects.clario_h3'],
      links: [
        { labelKey: 'projects.clario_view_ph', url: 'https://www.producthunt.com/products/clario-2' },
        { labelKey: 'projects.clario_get', url: 'https://project-1aso3.vercel.app/' },
      ],
    },
    {
      nameKey:   'projects.localconnect_name',
      descKey:   'projects.localconnect_desc',
      noteKey:   'projects.localconnect_note',
      note2Key:  'projects.localconnect_note_2',
      statusKey: 'projects.localconnect_status',
      variant:   'progress',
      tech:      ['Angular v20', '.NET 10', 'SQL Server', 'Azure', 'App Service', 'Blob Storage', 'Azure SQL'],
      screenshot: 'assets/images/localconnect-demo.gif',
      links: [{ labelKey: 'projects.view_site', url: 'https://localconnectweb.z6.web.core.windows.net/' }],
    },
  ];
}
