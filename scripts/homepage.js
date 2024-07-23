import {loadAnimation,isAnimationLoaded} from "./animation-home.js";
import {bestSellers,products} from '../data/products.js'
import {addToCart} from '../data/cart.js';


//function that controls which animation should run 

function animationFunctionController(){

    if(!isAnimationLoaded){
    loadAnimation();
    }

    else{
        document.querySelectorAll('*').forEach((element)=>{
            element.classList.add('visible');
        });
    }
}




// generating the best seller html
function renderBestSeller(){
    let bestSellerHtml='';
    bestSellers.forEach((bestSeller)=>{
        bestSellerHtml+=`
        <div class="best-seller-product">

                <div class="best-seller-image-container">
                    <img src="${bestSeller.image}" class="best-seller-image">
                    <div class="best-seller-tag">BEST SELLER</div>
                    <div class="discount-percentage-tag">${bestSeller.discountPercentage}</div>
                </div>

                <div class="best-seller-product-title">${bestSeller.name}</div>
                <div class="price-details">
                <div class="price-before-discount">Rs.${bestSeller.priceBeforeDiscount}</div>
                <div class="price-after-discount">Rs.${bestSeller.price}</div>
                </div>

                <button class="add-to-cart-button js-add-to-cart" data-product-id="${bestSeller.productId}">Add to Cart</button>
            </div>
        
        `
    });
    
    return bestSellerHtml;
}

// updating the bestSeller to its container in the html

const bestSellerProductsListContainer=document.querySelector('.best-seller-flex');
bestSellerProductsListContainer.innerHTML=renderBestSeller();


//making add to cart functionality

const addToCartButtons=document.querySelectorAll('.js-add-to-cart');
addToCartButtons.forEach((Button)=>{

Button.addEventListener("click",()=>{

const productId=Button.dataset.productId;
addToCart(productId);
});
});
renderBestSeller();