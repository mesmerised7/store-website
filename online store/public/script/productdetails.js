import {products,search} from '../data/products.js';
import {displaycartquantity, trigger} from '../data/cart.js';
import {convertintodollars} from './inbuilt/price.js';
const urlParams = new URLSearchParams(window.location.search);
const productid = urlParams.get('id');
let allhtml=``;
products.forEach((product)=>{
    if (product.id===Number(productid)){
        allhtml+=`
          <div class="pimg">
            <img class="productimg1" src="${product.image}" alt="">
        </div>
        <div class="productdetail">
            <div class="productname">${product.name}</div>
            <div class="productrating">
                ${product.rating.stars===0.4? 4:product.rating.stars}
                <img class="ratingimg" src="https://supersimple.dev/projects/amazon/images/ratings/rating-${product.rating.stars * 10}.png" alt="">
            </div>
            <div class="productdescription">
               ${product.description}
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur atque neque molestiae ullam inventore officia? Accusamus ipsum quibusdam itaque dignissimos voluptates, odio veritatis ad assumenda doloremque, earum explicabo! Voluptate, inventore.
            </div>
            <div class="quantity">
             <select class="options" name="" id="">
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
             </select>
             </div>
            <div class="productprice">$${convertintodollars(product.priceincents)}</div>
            <button class="productcartbtn js-add-to-cart" data-productid=${product.id}>Add to Cart</button>
        </div>
        `
    }
})
document.querySelector('.container').innerHTML=allhtml;
document.querySelector('.quantity').innerHTML=displaycartquantity();
search(allhtml)
trigger();