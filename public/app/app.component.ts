import { Component,provide } from '@angular/core';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';
import { ProductService } from './products/product.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav' *ngIf='!token'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                    <li><a [routerLink]="['/logout']">Logout</a></li>
                    <!-- <li class="pull-right dropdown open"style="float:right !important;">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">LoggeIn &nbsp;<span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                            <li class="divider"></li>
                            <li><a [routerLink]="['/logout']">Logout</a></li>
                        </ul>
                    </li> -->
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
                AuthenticationService,
                {provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class AppComponent {
    pageTitle: string = 'Admin Panel';
    token: any = localStorage.getItem("_userChek") === null;
    constructor(private _AuthenticationService: AuthenticationService) {
    }

}
