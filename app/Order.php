<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ["order_items", "name" , "address" , "pin"];

    public function order_items(){
        return $this->hasMany(Pizza::class);
    }
}
