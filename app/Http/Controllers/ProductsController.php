<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use App\Product;
use Input;

class ProductsController extends Controller
{
	private $product;
    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        $this->middleware('jwt.auth', ['except' => ['authenticate']]);
        $this->product = new Product;
    }

    public function index()
    {
    }

    public function getProducts(Request $request)
    {
    	echo json_encode($this->product->getProducts());
    }

    public function saveProducts(Request $request) {
        // Form Processing

        $this->product->fill(Input::all());
        
        //$id = empty(Input::get('id')) ? false : Input::get('id');

        if ($this->product->isValid() ) {
            if(!$this->product->productId || empty($this->product->productId) ){
                $this->product->save();
            } else {
                $this->product->update();
            }

            // Success!
            if(empty(Input::get('productId')) ) {
                echo $this->product->productId;
            }else{
                echo Input::get('productId');
            }
        } else {

            return json_encode($this->product->errors);
            
        }
    }
}
