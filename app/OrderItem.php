<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable=['pizza_id','count'];
    protected $table = "orderItem";
}
