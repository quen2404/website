import {Component} from '@angular/core';
import {faGithub, faLinkedin, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;

  isMenuOpened = false;
  routes: AppRouteItem[] = [
    {
      name: 'Home',
      path: '',
    },
    {
      name: 'Skills',
      path: 'skills',
    },
  ];

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  closeMenu() {
    this.isMenuOpened = false;
  }


}

interface AppRouteItem {
  name: string;
  path: string;
}
