import { Component } from '@angular/core';

import {NavComponent} from './nav-bar/nav.component';
import {SlideComponent} from './top-section/slide.component';
import {MainVideoComponent} from './videos/main-video.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavComponent, SlideComponent, MainVideoComponent] 
})

export class AppComponent {
  title: string = 'Learning Management System - Angular2';
}
