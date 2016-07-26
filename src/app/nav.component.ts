import {Component} from '@angular/core';

import {SearchComponent} from './search.component'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav.template.html',
    directives: [SearchComponent] 
})

export class NavComponent {
    username: string = 'Olotin Temitope';
    imageUrl: string  = 'http://lorempixel.com/50/50';
}