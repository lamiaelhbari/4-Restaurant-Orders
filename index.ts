/* We’re going to build on top of the previous project to filter orders instead 
of restaurants : */

import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// 1- Using PriceBracket --> getMaxPrice() function :
function getMaxPrice(price: PriceBracket): number 
{
  switch (price){
    case PriceBracket.Low: 
    return 10.0 ;
      case PriceBracket.Medium: 
    return 20.0 ;
      case PriceBracket.High: 
    return 30.0 ;
     }
};


// 2-Filtering Orders --> getOrders() function :
function getOrders(price:PriceBracket, orders: Order[][]){
let filteredOrders:Order [][]= [] ;
 orders.forEach((Restaurant) => {
  const filteredForRestaurant = Restaurant.filter(order => order.price <= getMaxPrice(price));
  filteredOrders.push(filteredForRestaurant);
 });
return filteredOrders;
};


// 3- Printing Orders --> printOrders() function :
function printOrders(restaurants:Restaurant[], filteredOrders:Order[][]){
filteredOrders.forEach((order,index)=>{
    if (order.length > 0) {
      console.log(`${restaurants[index].name}`);
      order.forEach(item => {
        console.log(`- ${item.name}: $${item.price}`);
      });
} })
};

// Main
const eligibleOrders = getOrders(PriceBracket.Medium, orders);
printOrders(restaurants, eligibleOrders);
 




