var d = document,
    itemBox = d.querySelectorAll('.item_box'),
    cartCont = d.getElementById('cart_content');
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}

function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}

function addToCart(e){

  var cartData = getCartData() || {},
      parentBox = this.parentNode,
      itemId = this.getAttribute('data-id'),
      itemTitle = parentBox.querySelector('.item_title').innerHTML,
      itemPrice = parentBox.querySelector('.item_price').innerHTML;
  if(cartData.hasOwnProperty(itemId)){
    cartData[itemId][2] += 1;
  } else {
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){

  }
 return false;
}

for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

function openCart(e){
  var cartData = getCartData(),
      totalItems = '';
  
  if(cartData !== null){
    totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
    for(var items in cartData){
      totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
  } else {
    
    cartCont.innerHTML = 'В корзине пусто!';
  }
  return false;
}

addEvent(d.getElementById('checkout'), 'click', openCart);

addEvent(d.getElementById('clear_cart'), 'click', function(e){
  localStorage.removeItem('cart');
  cartCont.innerHTML = 'Корзина очищена.';
});
var string = "✦AliExpress✦ - always here for you <3";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();
setTimeout(() => {
    const elem = document.getElementById("str");
    elem.parentNode.removeChild(elem);
}, 5000);
window.onload = function () {
            setTimeout(appeardiv,5000);
        }
        function appeardiv() {
            document.getElementById('container').style.display= "block";
        }