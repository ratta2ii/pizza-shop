// Business Logic

function Pizza(size, price, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = price;

}

Pizza.prototype.calculateToppingsTotal = function(toppingsCount){
  let toppingsTotal = toppingsCount * 1;
  grandTotal += toppingsTotal;
  return "$" + toppingsTotal.toString() + ".00";
}

Pizza.prototype.calculateTaxes = function(total){
  let taxes = total * .1;
  grandTotal += taxes;
  return "$" + Math.round(taxes) + ".00";
}

Pizzza.prototype.addToppings = function(array){
  for (let i in array){
    if (array[i].name === "topping"){
        toppingsArray.push(array[i].value);
    }
  }
}

// Pizzza.prototype.addToppings = function(allCheckedValues){
//   for (let i in allCheckedValues){
//     if (allCheckedValues[i].name === "topping"){
//         toppingsArray.push(allCheckedValues[i].value);
//     }
//   }
// }


let grandTotal = 37;  // Change this back to zero
let toppingsArray = [];
let numberOfToppings = toppingsArray.length;


// UI Logic ----------------------

$(document).ready(function(){

  $("form#toppings").submit(function(event) {
    event.preventDefault();

    let allCheckedValues = $("input:checkbox[name=topping]:checked");
    newPizza.addToppings();




    addToppings();

    console.log(toppingsArray);
  });



  $("button#order-now").click(function(){
    $("#toppings-price").text(newPizza.calculateToppingsTotal(10));  //Update cha
    $("#taxes").text(newPizza.calculateTaxes(32));  // Update changes
  })

  let newPizza = new Pizza("Large", toppingsArray, 12.99)   // Update cahnge

});
