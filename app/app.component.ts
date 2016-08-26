import { Component } from '@angular/core';
import { ProductListComponent} from './products/product-list.component';
@Component({
    selector: 'my-app',
    template: `<h1>{{pageTitle}}</h1>
    			<div>
    				<pm-products></pm-products>
    			</div>`,
   	directives: [ProductListComponent]
})
export class AppComponent {
	pageTitle: string= "Product Management";
}
