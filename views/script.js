
if(document.readyState == 'loading'){
    document.addEventListener('contentLoading',ready)
}else{
    ready()
}

function ready(){
var removeButtom = document.getElementsByClassName('btn-remove');
for(var i =0;i<removeButtom.length;i++){
var button = removeButtom[i];
button.addEventListener('click',removeCart)
}

var quantityChange = document.getElementsByClassName("quantity")
for(var i =0;i<quantityChange.length;i++){
    var qnt = quantityChange[i]
    qnt.addEventListener('change',qntchange) 
}

var addButton = document.getElementsByClassName("btn-add");
for(var i =0; i<addButton.length;i++){
    var button = addButton[i]
    button.addEventListener('click',addtoCartClick)
}

}

function addtoCartClick(event){
   var button = event.target
   var productItem = button.parentElement.parentElement
   var title = productItem.getElementsByClassName("item-title")[0].innerText
   var price = productItem.getElementsByClassName("item-price")[0].innerText
   var imgeSrc  = productItem.getElementsByClassName("item-img")[0].src
   console.log(title,price,imgeSrc);
   addtocart(title,price,imgeSrc)
}

function addtocart(title,price,imgeSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('contain')
    console.log(cartRow.innerText)
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartContent = ` <td>
    <div class="cart-info">
        <img src="proc-3.jpg.webp">
        <div>
            <p>HP 6GB RAM Intel i3 core</p>
            <span class="cart-price">₹2000</span>
            <input class="quantity" type="number" value="1">
            <button class="btn-remove">REMOVE</button>
        </div>
    </div>
</td>
<td class="subtotal">₹2000</td>`
cartRow.innerHTML = cartContent
cartItems.append(cartRow) 
    

}


function removeCart(event){
    var buttonclick = event.target
    buttonclick.parentElement.parentElement.parentElement.parentElement.remove()
    cartItems()
   
}

function qntchange(event){
    var qnt  = event.target
if(isNaN(qnt.value) || qnt.value <= 0){
    qnt.value = 1
}
cartItems()

}




function cartItems(){
    var cartItemsElement = document.getElementsByClassName("cart-items")[0]
    var cartRows = cartItemsElement.getElementsByClassName("cart-info")
    var total = 0;
    for(var i =0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0]
        var qntElement = cartRow.getElementsByClassName("quantity")[0]
        var price =parseFloat(priceElement.innerText.replace('₹',''))
        var quantity = qntElement.value
        total = total + (price * quantity)
        document.getElementsByClassName('subtotal')[i].innerText ='₹' + (price * quantity)
        console.log(price * quantity);
    }
      document.getElementsByClassName("total-price")[0].innerText ='₹'+total
}
