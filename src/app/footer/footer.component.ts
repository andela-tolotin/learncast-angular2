import {Component} from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: 'app/footer/footer.template.html'
})

export class FooterComponent {
    author: string = 'Temitope Olotin';
    gitHubUrl: string = 'https://github.com/andela-tolotin/';
    copyright: string = '©2016 Made with';
}