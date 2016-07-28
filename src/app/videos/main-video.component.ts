import {Component} from '@angular/core'

import {SideBarComponent} from './side-bar.component'

@Component({
    selector: 'featured-videos',
    templateUrl : 'app/videos/main-video.template.html',
    directives: [SideBarComponent]  
})
export class MainVideoComponent {

}