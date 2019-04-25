import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {HomeComponent} from './home/home.component';
import {AboutMeComponent} from './about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
