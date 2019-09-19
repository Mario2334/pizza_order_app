<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order__items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer("order_id")->unsigned();
            $table->integer("item_id")->unsigned();
            $table->timestamps();
        });
//        Schema::create('order__items', function (Blueprint $table) {
//           $table->foreign("order_id")->references("id")->on("order");
//           $table->foreign("item_id")->references("id")->on("OrderItem");
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_order_items');
    }
}
