var shoppingList = [];
var total = 0;

function Grocery(name, price) {
  this.name = name;
  this.price = price;
}

function collectInputs() {
  itemName = document.getElementById("item-name").value;
  price = Number(document.getElementById("price").value);
}

function addToArray(shoppingList) {
  var newItem = new Grocery(itemName, price);
  shoppingList.push(newItem);
}

function printListToPage(shoppingList) {
    var newListItem = document.createElement('li');
    newListItem.textContent = shoppingList[shoppingList.length-1].name + " " + shoppingList[shoppingList.length-1].price.toFixed(2);
    document.getElementById('list').appendChild(newListItem);
}

//Instead of getting rid of the child, couldn't you just use inner HTML so that the total doesn't repeat?
function printTotalToPage(shoppingList) {
  total += shoppingList[shoppingList.length-1].price;
  document.getElementById('total').innerHTML = "Total $" + total.toFixed(2);
}

function clearInputs() {
  document.getElementById("item-name").value = "";
  document.getElementById("price").value = "";
}

function addToList(shoppingList) {
  var itemName;
  var price;
  collectInputs();
  addToArray(shoppingList);
  printListToPage(shoppingList);
  printTotalToPage(shoppingList);
  clearInputs();
}

function remove() {
  document.getElementById('list').lastChild.remove();
  total -= shoppingList[shoppingList.length-1].price;
  shoppingList.splice(shoppingList.length-1, 1);
  document.getElementById('total').innerHTML = "Total $" + total.toFixed(2);

}

var productButton = document.getElementById('item-name').value;
var button = document.getElementById('remove');
button.onclick = remove;
