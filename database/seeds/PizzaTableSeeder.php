<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PizzaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pizzaData=array(
            array('name' => "Margherita" , 'description'=>"It is indeed one of the best and tasty pizzas among the vegetarian flavours. These are plain pizzas loaded with oodles of extra cheese which makes it delicious and most lip smacking.",'url'=>'http://top-10-list.org/wp-content/uploads/2011/05/1_pizza.jpg','buy_count'=>200,'price'=>10.4),
            array('name'=>'Gourmet' , 'description'=>'This is a unique flavour of vegetarian pizza where the pizza where the spicy vegetarian delight is topped with extremely appealing golden corns, loaded with extra cheese. This pizza is a unique flavour because of the additional toppings like the spread of black olives and the jalapenos.','url'=>'http://top-10-list.org/wp-content/uploads/2011/05/2_pizza.jpg','buy_count'=>140,'price'=>12.2),
            array('name' =>'Mexican Green Wave' , 'description'=>'This is another unique recipe of American pizza which mane is influenced by the Mexican Waves. Mexican Green Wave Pizza is loaded with crunchy onions, crispy capsicum, juicy tomato and jalapeno. This is a spicy flavour which is topped my liberal sprinkling of the exotic Mexican herbs.','url'=>'http://top-10-list.org/wp-content/uploads/2011/05/3_pizza.jpg','buy_count'=>160 , 'price'=>15.2),
            array('name' => 'Peppy Paneer' , 'description'=> 'Paneer is a fresh cheese common in South Asian Cuisine. It is an Indian Origin food item which is a delicious piece of cheese cube made of pure milk. The Paneer used in this pizza are barbequed and then few pieces of Paneer is sprinkled over the pizza along with crispy capsicum slices and spicy red pepper.','url'=>'http://top-10-list.org/wp-content/uploads/2011/05/4_pizza.jpg','buy_count'=>120,'price'=>13.2),
            array('name' =>'Margherita Pizza' , 'description'=>'Pizza Margherita is a very common and a popular menu in the Asian countries. These pizzas are delicious and are made with single topping of Cheese. The Margherita PizzaList are medium spicy and are actually very pleasant to taste. The pizzas are preferred by the customers who like a simple pizza topping. ' , 'url'=>'http://top-10-list.org/wp-content/uploads/2011/05/5_pizza.jpg','buy_count'=>100,'price'=>8.3),
            array('name'=> 'Meatzaa Pizza' , 'description' => 'This is a non- vegetarian dish and is exclusively meant for you, if you are a hard core Non Vegetarian. This pizza is a blend of hot and spicy chicken, barbeque chicken and ham and minced meat. All this meat makes it a extravagant non veg. pizza. The Meatzaa Pizza is filled with cheese and is topped with sprinkled Onions','url'=>'http://top-10-list.org/wp-content/uploads/2011/05/6_pizza.jpg','buy_count'=>80,'price'=>14.2),
            array('name' => 'Cheese and Barbeque Chicken' , 'description' =>'The Cheese and Barbeque chicken PizzaList are the most popular among the pizza flavours. In countries like India where Ham and beef are not consumed largely, this flavour of pizza is the most popular among the consumers. The pizza is first filled with cheese and is topped with extra cheese and barbeque chicken','url'=>'http://top-10-list.org/wp-content/uploads/2011/05/7_pizza.jpg','buy_count'=>97,'price'=>16.3),
            array('name'=>'Chicken Mexican Red Wave' , 'description'=>'These pizzas are one of the most delicious spicy flavours of pizzas available. The Mexican Red Wave Pizza is a lip smacking flavour of Pizza which is made with hot and spicy chicken as the main topping. This pizza is filled with extra cheese and is topped with crunchy onions, juicy tomatoes and sizzling red peppers.','url'=>'http://top-10-list.org/wp-content/uploads/2011/05/8_pizza.jpg','buy_count'=>94,'price' => 13.2),
            array('name'=>'Cheese and Pepperoni' , 'description'=>'This is one of the most popular flavours of pizza in the world. This is Americans favourite flavour as well. The pepperoni is a spicy food, an Italian-American variety of salami (a dry sausage) usually made from cured pork and beef. These are mostly chopped ham cut in circular thin pieces and placed on the pizza to form the topping. This pizza with pepperoni is then topped with a generous load of extra cheese.','url'=>'http://top-10-list.org/wp-content/uploads/2011/05/9_pizza.jpg','buy_count'=>65,'price' => 15.3),
            array('name'=>'Golden Chicken Delight','description'=>'This is another Pizza which is made of Barbeque chicken. In this pizza, barbeque chicken forms the main toppings of the pizza. The barbeque chicken is then sprinkled with toppings of golden corn which is an absolute delight to have.','url'=>'http://top-10-list.org/wp-content/uploads/2011/05/10_pizza.jpg','buy_count'=>34,'price' => 16.7)
        );
        DB::table('pizzas')->insert($pizzaData);
    }
}
