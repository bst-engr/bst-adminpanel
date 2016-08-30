import { Component } from '@angular/core';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [FORM_DIRECTIVES]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
