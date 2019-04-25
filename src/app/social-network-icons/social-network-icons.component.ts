import {Component, Input, OnInit} from '@angular/core';
import {faGithub, faLinkedin, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-network-icons',
  templateUrl: './social-network-icons.component.html',
  styleUrls: ['./social-network-icons.component.scss'],
})
export class SocialNetworkIconsComponent implements OnInit {
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;

  @Input()
  classes: string[] = [];

  constructor() {
  }

  getClasses() {
    return ['navbar-item', ...this.classes];
  }

  ngOnInit() {
  }
}
