import { Component } from '@angular/core';

import {NavComponent} from './nav-bar/nav.component';
import {SlideComponent} from './top-section/slide.component';
import {SideBarComponent} from './videos/side-bar.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavComponent, SlideComponent, SideBarComponent] 
})

export class AppComponent {
  title: string = 'Learning Management System - Angular2';
}
