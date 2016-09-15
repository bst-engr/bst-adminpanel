import { Component, OnInit, ElementRef, ViewChild }  from '@angular/core';
import { Router, ROUTER_DIRECTIVES,ActivatedRoute } from '@angular/router';
import { FormsModule,FORM_DIRECTIVES }   from '@angular/forms';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from './../shared/star.component';
import { ProductService } from './product.service';
import { AuthenticationService } from './../authentication/authentication.service';
import { DataService} from './../shared/data.service';
import { ProductModel } from './product.model';

@Component({
    templateUrl: 'app/products/product-save.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    providers: [AuthenticationService, DataService, ProductModel]
})
export class ProductSaveComponent {
    @ViewChild('imageFile') imageFile: ElementRef;
    @ViewChild('viewFile') viewFile: ElementRef;
    pageTitle: string = 'Add New Product';
    saved: any;
    errors:any = this._productModel.getErrorObject();
    product: any = this._productModel.getFieldsObject();
    errorMessage: string;
    productId: number;
    paramsSub:any;
    products: IProduct[];

    constructor(private _router: Router,
                private _productService: ProductService,
                private _AuthenticationService: AuthenticationService,
                private _dataService: DataService,
                private _productModel: ProductModel,
                private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        if(this._AuthenticationService.checkCredentials()) {
            this._activatedRoute.params.subscribe(params => {
                this.getProduct(params['id']); 
            });
        }
    }

    saveProduct() {
        this._dataService.httpPost('save-product', this.product)
                               .map((res) => res.json())
                                .subscribe(data => this.handleResponse(data), 
                                            err => this._dataService.parseError(err.json())
                                );
    }

    getProduct(id: number) {
        if(Number(id) > 0 )  {
            this._dataService.httpGet('get-product/'+id,{})
                .subscribe(
                    data => {this.product = data.json();}, 
                    err => this._dataService.parseError(err.json())
                );
        }
    }

    displayErrors (errors: any) {
        this.errors = errors;
        console.log(this.errors);
    }

    handleResponse(response: any) {
        if ( typeof response === "object" ) {
            console.log("inside");
            this.displayErrors(response)
        } else {
            this._router.navigate(['/products']);
        }
    }

    previewFile() {
        var preview = this.viewFile.nativeElement;
        var reader  = new FileReader();
        var file: any;
        var productObj=this.product;
        if(this.imageFile) {
          if (this.imageFile.nativeElement.files.length >= 1) {
              file = this.imageFile.nativeElement.files[0];
          }
        }

        reader.addEventListener("load", function () {
          preview.src = reader.result;
          productObj.imageUrl = preview.src;;
        }, false);

        if (file) {
          reader.readAsDataURL(file);
        }
    }
}
