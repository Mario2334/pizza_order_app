<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderOrderItem extends Model
{
    protected $fillable=["order_id" , "item_id"];
    protected $table ="order__items";
    protected $primaryKey="id";
}
