import {Component, ElementRef} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';
import {AuthenticationService, User} from './authentication.service'
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    templateUrl: 'app/authentication/login.component.html'
})
 
export class LoginComponent {
 
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}