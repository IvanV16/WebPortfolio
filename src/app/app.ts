import { Component } from '@angular/core';
import { NavbarComponent }     from './features/navbar/navbar.component';
import { HeroComponent }       from './features/hero/hero.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent }   from './features/projects/projects.component';
import { SkillsComponent }     from './features/skills/skills.component';
import { AboutComponent }      from './features/about/about.component';
import { ContactComponent }    from './features/contact/contact.component';
import { FooterComponent }     from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
