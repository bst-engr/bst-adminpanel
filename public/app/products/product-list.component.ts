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
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    providers: [AuthenticationService, DataService]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    products: IProduct[];

    constructor(private router: Router,
                private _productService: ProductService,
                private _AuthenticationService: AuthenticationService,
                private _dataService: DataService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
           //this._AuthenticationService.checkCredentials(); // redirection if not authenticated      
            if(this._AuthenticationService.checkCredentials()) {
                this._dataService.httpGet('get-products', {})
                               .map((res) => res.json())
                                .subscribe(data => this.products= data, 
                                            err => this._dataService.parseError(err.json())
                                );
             }
    }

    editProduct(id: number) {
        console.log(id);
        this.router.navigate(['/edit-product/'+id]);
    }

    deleteProduct(id: number) {
        if(confirm("Are you sure to delete this item?")) {
            this._dataService.httpGet('delete-product/'+id,{})
                .map((res) => res.json())
                .subscribe(
                    data => this.products= data, 
                    err => this._dataService.parseError(err.json())
                );

        }
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
