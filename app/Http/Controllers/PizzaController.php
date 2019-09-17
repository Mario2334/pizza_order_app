<?php

namespace App\Http\Controllers;

use App\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    public function getPizzas(){
        $pizzas = Pizza::orderBy('buy_count','desc')
                    ->get();

        return $pizzas->toJson();
    }
}
