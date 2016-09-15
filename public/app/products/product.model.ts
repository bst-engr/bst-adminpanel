export class ProductModel {
	errors:any = {  
                    productId: false,
                    productName : false,
                    productCode: false,
                    releaseDate: false,
                    description: false,
                    price: false,
                    imageUrl:false
                   };
    product: any = {
                    productId: '',
                    productName :'',
                    productCode: '',
                    releaseDate: '',
                    description: '',
                    price: '',
                    imageUrl:''
                   };

    getErrorObject() {
    	return this.errors;
    }

    getFieldsObject() {
    	return this.product;
    }
}