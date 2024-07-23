import { cart,saveToStorage,removeFromCart,getCartItem} from "../data/cart.js";
import {getProduct, products} from "../data/products.js";
import { deliveryOptions,getDeliveryOption } from "../data/deliveryOptions.js";
import dayjs from '//unpkg.com/dayjs@1.11.10/esm/index.js';

let cartSummaryHtml='';

cart.forEach((cartItem)=>{
    let matchingItem;
    products.forEach((product)=>{
        if(product.productId===cartItem.productId){
            matchingItem=product;
        }
    });

    const deliveryOption=getDeliveryOption(cartItem.deliveryId);
    console.log(matchingItem);

    cartSummaryHtml+=`

    <div class="cart-item js-cart-item-${matchingItem.productId}">
        <img class="product-image" src="${matchingItem.image}"> <!--column 1 of the cart container grid-->

        <div class="details"> <!--column 2 of the cart container-->
            <div class="product-name">${matchingItem.name}</div> <!--row 1 of the details flex-->



            <div class="short-description"> <!--row 2 of the details flex-->
                <div class="description 1">${matchingItem.size}</div>
                <div class="description 2">${matchingItem.color}</div>
            </div> 



            <div class="quantity-price-details"> <!--row 3 of the details flex-->

            <div class="quantity-details">  <!--column 1 of the quantity-price-details flex-->
            <div class="quantity-header">Quantity:</div>
            <div class="quantity-count js-quantity-count-${matchingItem.productId}">${cartItem.quantity}</div>
            </div>.

            <div class="product-price-section">  <!--column 2 of the quantity-price-details flex-->
                <div class="per-item-price-header">Per Item</div>
                <div class="price">Rs.${matchingItem.price}</div>
            </div>

            <div class="buttons js-buttons-${matchingItem.productId}">
                <button class='increment-quantity-button' data-product-id="${matchingItem.productId}">+</button>
                <button class='decrement-quantity-button' data-product-id="${matchingItem.productId}">-</button>
                <button class="update-button js-update-button" data-product-id="${matchingItem.productId}">Update</button>
                <button class="delete-button js-delete-button" data-product-id="${matchingItem.productId}">Delete</button>
            </div>

            </div>
        </div>

        <div class="stock-information">In Stock</div> <!--column 3 of the cart container grid-->

        

        <div class="delivery-option-section"> <!--column 1 & row 1 & 2 of the cart container-->
        <div class="delivery-option-header"> Choose Delivery Option: </div> 
        ${deliveryOptionsHtml(matchingItem,cartItem)}
        </div>
        <div class="total-price-calculation">
        <div class="item-quantity-${matchingItem.productId}"><span>${cartItem.quantity}</span> Items</div>
        <div class="total-price js-total-price-${matchingItem.productId}">Rs.${((cartItem.quantity)*(matchingItem.price))+deliveryOption.price}</div>
        </div>
    </div>`
});

//updating the cartSummaryHtml to the cartContainer in the html code

const cartContainer=document.querySelector('.cart-container');
cartContainer.innerHTML=cartSummaryHtml;

//making the update button interactive
document.querySelectorAll('.js-update-button').forEach((updateButton)=>{
    updateButton.addEventListener("click",()=>{
        const productId=updateButton.dataset.productId;
        const cartItem=getCartItem(productId);
        const deliveryOption=getDeliveryOption(cartItem.deliveryId);
        const container=document.querySelector(`.js-cart-item-${productId}`);


        //making the save button interactive
        if(updateButton.classList.contains('save-button'))
        {

            const updatedQuantity=document.querySelector(`.js-quantity-count-${productId}`).innerHTML;
            let matchingItem;

            cart.forEach((item)=>{
                if(item.productId===productId){
                    matchingItem=item;
                }
            });
            
            let matchingProduct;
            products.forEach((product)=>{
                if(product.productId===productId){
                    matchingProduct=product;
                }
            });


            matchingItem.quantity=updatedQuantity;
            saveToStorage();
            renderPaymentSummary();
            updateButton.classList.remove('save-button');
            updateButton.innerHTML='Update';
            container.classList.remove('is-editing-quantity');
            document.querySelector(`.item-quantity-${matchingItem.productId}`).innerHTML=`${matchingItem.quantity} Items`;
            document.querySelector(`.js-total-price-${matchingItem.productId}`).innerHTML=`Rs.${((matchingItem.quantity)*(matchingProduct.price))+deliveryOption.price}`;
        }
        else{
            container.classList.add('is-editing-quantity');
            updateButton.classList.add('save-button');
            updateButton.innerHTML='Save';
        }
    })
});


//making the increment quantity button interactive

document.querySelectorAll('.increment-quantity-button').forEach((incrementQuantityButton)=>{

    const productId=incrementQuantityButton.dataset.productId;
    incrementQuantityButton.addEventListener("click",()=>{
    const quantityElement=document.querySelector(`.js-quantity-count-${productId}`);
    let currentQuantity=Number(quantityElement.innerHTML);
    currentQuantity+=1;
    quantityElement.innerHTML=currentQuantity;

    });

});

//making the decrement quantity button interactive

document.querySelectorAll('.decrement-quantity-button').forEach((decrementQuantityButton)=>{

    const productId=decrementQuantityButton.dataset.productId;
    decrementQuantityButton.addEventListener("click",()=>{
    const quantityElement=document.querySelector(`.js-quantity-count-${productId}`);
    let currentQuantity=Number(quantityElement.innerHTML);
    if(currentQuantity===0){
        currentQuantity=0;
    }
    else{
        currentQuantity-=1;
        quantityElement.innerHTML=currentQuantity;

    }

    });

});

//making the delete button interactive

document.querySelectorAll('.js-delete-button').forEach((deleteButton)=>{
    const productId=deleteButton.dataset.productId;
    let deletedItem=document.querySelector(`.js-cart-item-${productId}`)
    deleteButton.addEventListener("click",()=>{

        deletedItem.remove();
        removeFromCart(productId);
        renderPaymentSummary();
})});

//for generating the delivery option section html

function deliveryOptionsHtml(matchingItem,cartItem){
    let html='';
    deliveryOptions.forEach((deliveryOption)=>{
        const today=dayjs();
        const deliveryDate=today.add(deliveryOption.days,'days');
        const formattedDeliveryDate=deliveryDate.format('dddd,MMM D');
        const shippingCost=deliveryOption.price===0 ? "FREE SHIPPING" : `Extra Rs. ${deliveryOption.price}`;
        const isChecked=deliveryOption.deliveryId===cartItem.deliveryId;
        html+=`<div class="delivery-option">
            <input name="delivery-option-${matchingItem.productId}" class="radio-button" type="radio" data-product-id="${matchingItem.productId}"  data-delivery-id="${deliveryOption.deliveryId}"${isChecked ? 'checked' : ''}>
            <div class="delivery-date">${formattedDeliveryDate}</div>
            <div class="shipping-cost">${shippingCost}</div>
        </div>`

    });
    return html;
    
}

//updating the total price details when clicking the delivery option radio button

document.querySelectorAll('.radio-button').forEach((deliveryOptionButton)=>{

    const productId=deliveryOptionButton.dataset.productId;

    const matchingProduct=getProduct(productId);

    const deliveryId=Number(deliveryOptionButton.dataset.deliveryId);

    const deliveryOption=getDeliveryOption(deliveryId);

    deliveryOptionButton.addEventListener("click",()=>{

    const cartItem=getCartItem(productId);

    cartItem.deliveryId=deliveryId;

    renderPaymentSummary();

    document.querySelector(`.js-total-price-${productId}`).innerHTML=`Rs.${((cartItem.quantity)*(matchingProduct.price))+Number(deliveryOption.price)}`;

    
    })
});

//for generating the payment summary html

function renderPaymentSummary(){
    let html='';
    let totalCartQuantity=0;
    let totalShippingPrice=0;
    let totalProductPrice=0;
    let totalBeforeTax=0;
    let taxAmount=0;
    let totalAfterTax=0;
    let handlingCharges=0;

    cart.forEach((cartItem)=>{
        let product=getProduct(cartItem.productId);
        let deliveryOption=getDeliveryOption(cartItem.deliveryId);
        totalCartQuantity+=Number(cartItem.quantity);
        totalShippingPrice+=deliveryOption.price;
        totalProductPrice+=(cartItem.quantity)*(product.price);
    });
    totalBeforeTax=totalProductPrice+totalShippingPrice;
    taxAmount=((totalBeforeTax)*5)/100;
    handlingCharges=(totalBeforeTax*2)/100;
    totalAfterTax=totalBeforeTax+taxAmount+handlingCharges;

    


    html=`<h3>Payment Summary</h3>

        <div class="total-items-count-price-payment-summary payment-summary-column">Items(${totalCartQuantity}) : Rs.${totalProductPrice}</div>

        <div class="shipping-charges-payment-summary payment-summary-column">Shipping Charges: ${totalShippingPrice}</div>

        <div class="handling-charges-payment-summary payment-summary-column">Handling Charges: Rs.${handlingCharges}</div>

        <div class="total-before-tax payment-summary-column">Total Price Before Tax: Rs.${totalBeforeTax} </div>

        <div class="tax-amount-percentage payment-summary-column">Tax Amount : Rs.${taxAmount} (5%)</div>

        <div class="total-price-after-tax payment-summary-column">Total Amount to Pay : Rs.${Math.round(totalAfterTax)}</div>`;

    document.querySelector('.payment-summary-container').innerHTML=html;
}
renderPaymentSummary();

