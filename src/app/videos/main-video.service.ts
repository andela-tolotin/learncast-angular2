import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

export class Video {
    constructor(
        public id: number,
        public name: string, 
        public title: string, 
        public url: string, 
        public view: number
    ) {}
}

@Injectable()
export class MainVideoService {
    videos: Video[];

    constructor(private _http: Http) {}

    getVideos() {
        return this._http.get('app/videos/videos.json')
        .map((response: Response) =>  <Video[]>response.json())
        .do(data => console.log('data'))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}