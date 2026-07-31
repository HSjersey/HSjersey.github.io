let cart = [];

function addToCart(product){

    cart.push(product);

    document.getElementById("cart-count").innerHTML = cart.length;

    alert(product + " added to cart!");
}


function openCart(){

    document.getElementById("cart").style.display="block";

    let list = document.getElementById("cart-items");

    list.innerHTML="";

    cart.forEach(item=>{

        let li=document.createElement("li");
        li.innerHTML=item;
        list.appendChild(li);

    });

}


function closeCart(){

    document.getElementById("cart").style.display="none";

}
