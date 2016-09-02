import { Component } from '@angular/core';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';
import { Router,ROUTER_DIRECTIVES } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { DataService} from '../shared/data.service';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [FORM_DIRECTIVES,ROUTER_DIRECTIVES],
    providers: [AuthenticationService, DataService]})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    constructor(private _router: Router,
                private _AuthenticationService: AuthenticationService,
                private _dataService: DataService)
    { 
    }

    ngOnInit(): void {
    	this._AuthenticationService.checkCredentials(); // redirection if not authenticated        
        this.checkSession();
    }

    checkSession() {
          this._dataService.httpGet('check-session')
                              .subscribe(data => console.log(data), 
                                    err => this._dataService.parseError(err.json())
                              );
    }
}
