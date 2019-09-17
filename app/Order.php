<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded = ["full_name" , "address" , "pin"];
    protected $fillable = ["pizzas" , "total_order"];
    public function pizzas(){
        return $this->hasMany(Pizza::class);
    }
}
