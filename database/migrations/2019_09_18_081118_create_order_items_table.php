<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orderItem', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pizza_id')->unsigned();
            $table->integer('count');
            $table->timestamps();
        });
        Schema::table('orderItem', function(Blueprint $table) {
            $table->foreign('pizza_id')->references('id')->on('pizza');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
}
