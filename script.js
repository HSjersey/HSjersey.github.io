let cart=[];


function addToCart(item){

cart.push(item);

document.getElementById("cart-count").innerHTML=cart.length;

alert(item+" added to cart!");

}



function openCart(){

document.getElementById("cart").style.display="block";


let list=document.getElementById("cart-items");

list.innerHTML="";


cart.forEach(product=>{

let li=document.createElement("li");

li.innerHTML=product;

list.appendChild(li);

});

}



function closeCart(){

document.getElementById("cart").style.display="none";

}
