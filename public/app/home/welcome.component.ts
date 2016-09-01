import { Component } from '@angular/core';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [FORM_DIRECTIVES],
    providers: [AuthenticationService]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    constructor(private _router: Router,
                private _AuthenticationService: AuthenticationService)
    { 
    }

    ngOnInit(): void {
    	this._AuthenticationService.checkCredentials(); // redirection if not authenticated        
    }
}
