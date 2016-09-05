import { Component, OnInit }  from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { DataService} from '../shared/data.service';

@Component({
    templateUrl: 'app/products/product-save.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    providers: [AuthenticationService, DataService]
})
export class ProductSaveComponent {
    pageTitle: string = 'Add New Product';
    saved: any;
    errors:any = {  productName : false,
                    productCode: false,
                    releaseDate: false,
                    description: false,
                    price: false,
                    imageUrl:false
                   };
    product: any = {productName :'',
                    productCode: '',
                    releaseDate: '',
                    description: '',
                    price: '',
                    imageUrl:''
                   };
    errorMessage: string;
    products: IProduct[];

    constructor(private _router: Router,
                private _productService: ProductService,
                private _AuthenticationService: AuthenticationService,
                private _dataService: DataService) {

    }

    saveProduct() {
        console.log(JSON.stringify(this.product));
        this._dataService.httpPost('save-product', this.product)
                               .map((res) => res.json())
                                .subscribe(data => this.handleResponse(data), 
                                            err => this._dataService.parseError(err.json())
                                );
    }

    displayErrors (errors: any) {
        this.errors = errors;
        console.log(this.errors);
    }

    handleResponse(response: any) {
        if(typeof response === "object") {
            console.log("inside");
            this.displayErrors(response)
        } else {
            this._router.navigate(['/products']);
        }
    }
}
