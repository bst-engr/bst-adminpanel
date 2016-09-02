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
 
export class LoginComponent {
 
    public user = new User('','');
    public errorMsg = '';
    public authenticatedUser:any;

    constructor(
        private _service:AuthenticationService,
        private _router: Router,
        private _http: Http) {}
 
    login() {
        this._service.login(this.user)
            .subscribe(data => this.parseResponse(data), 
                        err => console.log(err.json())
                        );
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }

    private parseResponse(response:any) {
      (this.authenticatedUser) = response.json();
      if (this.authenticatedUser){
          localStorage.setItem("_userChek", this.authenticatedUser.token);
          this._router.navigate(['/welcome']);
         return true;
        }
        return false;
    }
}