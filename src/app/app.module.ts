import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SocialNetworkIconsComponent } from './social-network-icons/social-network-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    HomeComponent,
    AboutMeComponent,
    SocialNetworkIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
