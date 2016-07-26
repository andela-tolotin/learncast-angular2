import { Component } from '@angular/core';

import {NavComponent} from './nav.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavComponent] 
})

export class AppComponent {
  title = 'Welcome to Learning Management System - Angular2';
}
