<?php

namespace App\Http\Controllers;

use App\Order;
use App\OrderItem;
use App\OrderOrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    public function postOrder(Request $request){
        $validated_data = $request->validate([
            'name'=>'required',
            'address' => 'required',
            'pin' => 'required',
            'pizzas' => 'required',
        ]);

        $items = $validated_data['pizzas'];
        $totalPrice = self::getTotalPrice($items);

        $order = Order::create([
            'name' => $validated_data["name"],
            'address' => $validated_data["address"],
            'pin' => $validated_data['pin'],
            'total_price' => $totalPrice,
        ]);

        $items = self::createOrderItems($items);
        $order = Order::find($order["id"]);

        foreach ($items as $item){
            OrderOrderItem::create([
                'order_id' => $order["id"],
                'item_id' => $item["id"]
            ]);
        }

        $validated_data["id"] = $order["id"];

        $session = self::getStripeCheckout($validated_data);

        error_log(json_encode($session));
        return response()->json([
            "status"=>"success",
            "session" => $session
        ]);
    }

    public function updateOrder(Request $request){
        error_log($request);
        $validated_data = $request->validate([
            "order_id"=>"required",
            "is_completed" => "required"
        ]);
        $order = Order::findOrFail($validated_data["order_id"]);
        $order-> is_completed = $validated_data["is_completed"];
        $order->save();

        return response()->json();
    }

    public function getOrder(){
        $orders = Order::get();
        return response()->json([
            "order" => $orders->toJson()
        ]);
    }

    public function createOrderItems($pizzas ){
        $items=[];
        foreach ($pizzas as $pizza) {
            $item = new OrderItem([
                "pizza_id" => $pizza["id"],
                "count" => $pizza["count"]]);
            $item->save();
            array_push($items,$item);
        }

            return $items;
    }
    public static function getTotalPrice($pizzas){
        $totalPrice = 0;
        foreach ($pizzas as $pizza){
            $totalPrice += (float)$pizza["price"] * $pizza["count"];
        }
        return $totalPrice;
    }
    public static function getStripeCheckout($validated_data){
        \Stripe\Stripe::setApiKey(env("STRIPE_SECRET"));
        $lineitems = [];
        $http_origin="";
        if (env("NGROK_URL") == "ngrok") {
            $http_origin = env("NGROK_URL");
            }
        else{
            $http_origin = $_SERVER["HTTP_ORIGIN"]."/";
        }
        foreach ($validated_data['pizzas'] as $orderItem){
            array_push($lineitems ,
                [
                    "name"=>$orderItem["name"],
                    "amount"=>(float)$orderItem["price"]*100,
                    "quantity" => $orderItem["count"],
                    "currency" => env("DEFAULT_CURRENCY")
                ]);
        }
        $order_id = $validated_data["id"];
        $session = \Stripe\Checkout\Session::create([
            "success_url"=>$http_origin."success_order?order_id=$order_id",
            "cancel_url"=>$http_origin."cancel_order?order_id=$order_id",
            "payment_method_types" => ["card"],
            "line_items"=>$lineitems,
            "mode" =>"payment",
            "submit_type"=>"auto"
        ]);
        return $session;
    }
}
