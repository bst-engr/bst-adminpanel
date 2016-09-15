import {Component, ElementRef} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';
import {AuthenticationService, User} from './authentication.service';
import { Http, Response,Headers, RequestOptions  } from '@angular/http';
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    templateUrl: 'app/authentication/login.component.html'
})
 
export class LogoutComponent {
 
    public user = new User('','');
    public errorMsg = '';
    public authenticatedUser:any;

    constructor(
        private _service:AuthenticationService,
        private _router: Router,
        private _http: Http) {}

    ngOnInit() {
        localStorage.removeItem('_userChek');
        location.href = '/login';
        //this._router.navigate(['/login']);
    }
   
}