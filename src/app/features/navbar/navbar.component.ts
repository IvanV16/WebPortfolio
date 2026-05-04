import { Component, inject, signal, HostListener } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/services/i18n.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private themeService = inject(ThemeService);
  private i18nService  = inject(I18nService);

  isScrolled     = signal(false);
  isMobileOpen   = signal(false);

  theme = this.themeService.theme;
  lang  = this.i18nService.lang;

  readonly navLinks = [
    { key: 'nav.home',       id: 'home'       },
    { key: 'nav.experience', id: 'experience' },
    { key: 'nav.projects',   id: 'projects'   },
    { key: 'nav.skills',     id: 'skills'     },
    { key: 'nav.about',      id: 'about'      },
    { key: 'nav.contact',    id: 'contact'    },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 24);
  }

  toggleTheme()  { this.themeService.toggle(); }
  toggleLang()   { this.i18nService.toggle(); }
  toggleMobile() { this.isMobileOpen.update(v => !v); }
  closeMobile()  { this.isMobileOpen.set(false); }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMobile();
  }
}
