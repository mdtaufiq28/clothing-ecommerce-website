export let cart=JSON.parse(localStorage.getItem('cartEcommerce'));

if(!cart){
    cart=[{
        productId: "PID1032",
        quantity:1,
        deliveryId:1
    }]
}


export function saveToStorage(){
    localStorage.setItem('cartEcommerce',JSON.stringify(cart));
}

export function updateCartQuantity(){

}
//add to cart functionality
export function addToCart(productId){
    let matchingItem;
    cart.forEach((item)=>{

        if(item.productId===productId){
            matchingItem=item;
        }
    });
    
    if(matchingItem){
        matchingItem.quantity+=1;
        console.log(cart);
    }
    else{
        cart.push(
            {
                productId: productId,
                quantity: 1,
                deliveryId: 1
            }
        );
        console.log(cart);
    }
    saveToStorage();
}

export function removeFromCart(productId){
    console.log('i am executing');
    const newCart=[];
    cart.forEach((item)=>{
      if(item.productId!==productId){
      console.log(item);
      newCart.push(item);
      }
    });
    cart=newCart;
    saveToStorage();
}
export function getCartItem(productId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }
    });
    return matchingItem;

}