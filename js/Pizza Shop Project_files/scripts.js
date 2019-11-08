// Business Logic

function Pizza(size, price, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = price;

}

// var pizza1 = new Pizza(.....ADD VARIABLE NAMES OF INPUT VALUES........);


let toppingsArray = [];

$(document).ready(function(){

  $("form#toppings").submit(function(event) {
    event.preventDefault();

    let allCheckedValues = $("input:checkbox[name=topping]:checked");

    for (let i in allCheckedValues){
      if (allCheckedValues[i].name === "topping"){
          toppingsArray.push(allCheckedValues[i].value);
      }
    }
    console.log(toppingsArray);
  });



});
