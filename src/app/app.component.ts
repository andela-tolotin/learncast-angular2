import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {NavComponent} from './nav-bar/nav.component';
import {SlideComponent} from './top-section/slide.component';
import {Video, MainVideoService} from './videos/main-video.service';
import {MainVideoComponent} from './videos/main-video.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavComponent, SlideComponent, MainVideoComponent],
  providers:[
    HTTP_PROVIDERS, 
    MainVideoService
  ] 
})

export class AppComponent {
  title: string = 'Learning Management System - Angular2';
}
