import {Component} from '@angular/core';

import {SideBarComponent} from './side-bar.component';
import {Video, MainVideoService} from './main-video.service';

@Component({
    selector: 'featured-videos',
    templateUrl : 'app/videos/main-video.template.html',
    directives: [SideBarComponent],
    providers: [MainVideoService]  
})

export class MainVideoComponent {
    videos: Video[];
    errorMessage: string;
    
    constructor(private _videoService: MainVideoService) {}

    ngOnInit() {
        this.fetchVideos();
    }

    fetchVideos() {
        this._videoService
        .getVideos()
        .subscribe(
            videos => this.videos = videos,
            error => this.errorMessage = <any> error
        );
    }

    styles(video) {
        return {
            'height':'150px', 
            'background':'url("http://img.youtube.com/vi/'+video.url+'/mqdefault.jpg")', 
            'background-size':'cover'
        }
    }
}