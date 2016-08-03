import {Component} from '@angular/core';

import {SideBarService} from './side-bar.service'

@Component({
    selector: 'side-bar',
    templateUrl: 'app/videos/side-bar.template.html',
    providers: [SideBarService] 
})
export class SideBarComponent {
    categories: string[];

    constructor(private _catServices: SideBarService) {
       this.categories = _catServices.getCategories();
    }
}