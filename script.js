function order(product){

let message = "Hello, I want to order " + product;

let url = "https://wa.me/923308480097?text=" + encodeURIComponent(message);

window.open(url);

}
