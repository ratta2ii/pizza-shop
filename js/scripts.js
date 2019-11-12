// Business Logic

function Pizza(size, price, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.calculateToppingsCosts = function(toppingsCount){
  let toppingsTotal = toppingsCount * 0.99;
  grandTotal += toppingsTotal;
  toppingsTotal = toppingsTotal.toFixed(2);
  return "$" + toppingsTotal.toString();
}

Pizza.prototype.calculateTaxes = function(total){
  let taxes = total * .12;
  grandTotal += taxes;
  return "$" + taxes.toFixed(2);
}

let pizzaCost = function(pizzaSize){
  if (pizzaSize === "small"){
    grandTotal += 8.99;
    return "$8.99";
  }
  if (pizzaSize === "medium"){
    grandTotal += 11.99;
    return "$11.99";
  }
  if (pizzaSize === "large"){
    grandTotal += 15.99;
    return "$15.99";
  }
}

let makeToppingsList = function(array){
  for (let i in array){
    if (array[i].name === "topping"){
        toppingsArray.push(array[i].value);
    }
  }
  return toppingsArray;
}

let toppingsArray = [];
let toppingsCount = toppingsArray.length;
let grandTotal = 0;



// UI Logic ----------------------

$(document).ready(function(){

  $("form#toppings").submit(function(event) {
    event.preventDefault();
    $("form#toppings").hide();

    let pizzaSize = $("#sizes").val();
    let allCheckedValues = $("input:checkbox[name=topping]:checked");
    let toppings = makeToppingsList(allCheckedValues);
    let pizzaPrice = pizzaCost(pizzaSize);
    let toppingsCount = toppingsArray.length;

    let newPizza = new Pizza(pizzaSize, toppings, pizzaPrice);

    $("#pizza-price").text(pizzaPrice);
    $("#toppings-price").text(newPizza.calculateToppingsCosts(toppingsCount));
    $("#taxes").text(newPizza.calculateTaxes(grandTotal));
    $("#grand-total").text(grandTotal.toFixed(2));
    $("#receipt-div").show();

    $("ul#list-items").append("<li>One " + pizzaSize + " pizza</li>");
    toppingsArray.forEach(function(topping){
      $("ul#list-items").append("<li>" + topping + " topping</li>");
    });

    toppingsArray = [];
    grandTotal = 0;

  });

  $("button#change-order").click(function(){
    $("ul#list-items").empty();
    $("form#toppings").show();
    $("#receipt-div").hide();
  });

});
