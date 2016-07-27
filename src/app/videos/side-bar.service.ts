import {Component, Injectable} from '@angular/core';

@Injectable()
export class SideBarService {
    categories: string[] = [
        'Ruby',
        'AngularJs',
        'PHP',
        'JQuery',
        'CSharp',
        'Erlang',
        'Python',
        'Javascript',
        'Laravel'
    ];

    getCategories() {
        return this.categories;
    }
}