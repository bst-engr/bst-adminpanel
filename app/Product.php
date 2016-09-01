<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class Product extends Model implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'products';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function getProducts() {
        return array(
                    array(
                        "productId"=> 1,
                        "productName"=> "Leaf Rake",
                        "productCode"=> "GDN-0011",
                        "releaseDate"=> "March 19, 2016",
                        "description"=> "Leaf rake with 48-inch wooden handle.",
                        "price"=> 19.95,
                        "starRating"=> 3.2,
                        "imageUrl"=> "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                    ),
                    array(
                        "productId"=> 2,
                        "productName"=> "Garden Cart",
                        "productCode"=> "GDN-0023",
                        "releaseDate"=> "March 18, 2016",
                        "description"=> "15 gallon capacity rolling garden cart",
                        "price"=> 32.99,
                        "starRating"=> 4.2,
                        "imageUrl"=> "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                    ),
                    array(
                        "productId"=> 5,
                        "productName"=> "Hammer",
                        "productCode"=> "TBX-0048",
                        "releaseDate"=> "May 21, 2016",
                        "description"=> "Curved claw steel hammer",
                        "price"=> 8.9,
                        "starRating"=> 4.8,
                        "imageUrl"=> "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                    ),
                    array(
                        "productId"=> 8,
                        "productName"=> "Saw",
                        "productCode"=> "TBX-0022",
                        "releaseDate"=> "May 15, 2016",
                        "description"=> "15-inch steel blade hand saw",
                        "price"=> 11.55,
                        "starRating"=> 3.7,
                        "imageUrl"=> "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                    ),
                    array(
                        "productId"=> 10,
                        "productName"=> "Video Game Controller",
                        "productCode"=> "GMG-0042",
                        "releaseDate"=> "October 15, 2015",
                        "description"=> "Standard two-button video game controller",
                        "price"=> 35.95,
                        "starRating"=> 4.6,
                        "imageUrl"=> "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                    )
                );
    }
}
