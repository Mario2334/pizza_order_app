<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    public function postOrder(Request $request){
        $validated_data = $request->validate([
            'name'=>'required',
            'address' => 'required',
            'pin' => 'required',
            'pizzas' => 'required'
        ]);
        $items = $validated_data['pizzas'];

//        self::sortItems($items);
//        $order = Order::create([
//            'name' => $validated_data["name"],
//            'address' => $validated_data["address"],
//            'pin' => $validated_data['pin']
//        ]);
        return response()->json([
        ]);
    }
    public function getOrder(){
        $orders = Order::get();

        return response()->json([
            "order" => $orders->toJson()
        ]);
    }
    public static function sortItems($orderItems){
        foreach ($orderItems as $orderItem) {

             error_log("item: orderItem");
        }
    }
    public static function getStripeCheckout($validated_data){
        \Stripe\Stripe::setApiKey(env("STRIPE_SECRET"));
        $session = \Stripe\Checkout\Session::create([

        ]);
    }
}
