<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [ "name" , "address" , "pin" , "total_price"];

    protected $table="order";

    public function items(){
        return $this->hasMany("App\OrderItem","id");
    }
}
