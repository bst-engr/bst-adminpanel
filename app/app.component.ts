import { Component } from '@angular/core';
import { ProductListComponent} from './products/product-list.component';
import { ProductService} from './products/product.service';

@Component({
    selector: 'my-app',
    template: `<h1>{{pageTitle}}</h1>
    			<div>
    				<pm-products></pm-products>
    			</div>`,
   	directives: [ProductListComponent],
   	providers: [ProductService]
})
export class AppComponent {
	pageTitle: string= "Product Management";
}
