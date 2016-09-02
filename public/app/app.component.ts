import { Component,provide } from '@angular/core';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
//import { AuthenticationService } from './authentication/authentication.service';
import { ProductService } from './products/product.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    providers: [ProductService,
                HTTP_PROVIDERS,
                {provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class AppComponent {
    pageTitle: string = 'Admin Panel';
    token: string = "";
}
