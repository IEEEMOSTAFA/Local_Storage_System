const addProduct = () => {
 const productField  = document.getElementById('Product-name');
 const quantityField  = document.getElementById('Product-quantity');
 const product = productField.value;
 const quantity = quantityField.value;
 productField.value = '';
quantityField.value = '';
 console.log(product,quantity);
 displayProduct(product, quantity);
 saveProductToLocalStorage(product,quantity);
}

const displayProduct = (product,quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);

}
 const getStoredShopingCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);

    }
    return cart;
 }
const saveProductToLocalStorage = (product,quantity) => {

    const cart = getStoredShopingCart();
    cart[product] = quantity;
    // console.log(cart);
    const cartStringIpy = JSON.stringify(cart);
    // console.log(cartStringIpy);
    localStorage.setItem('cart', cartStringIpy)
}
const displayProductFromLocalStorage = () => {
    const savedCart = getStoredShopingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStorage();   