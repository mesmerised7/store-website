import {displaycartquantity, trigger} from '../data/cart.js';
import {products,search} from '../data/products.js'
import {convertintodollars} from './inbuilt/price.js'
let allhtml=``;
products.forEach((product)=>{
    allhtml+=`<div class="o productdetails">
         <div class="pimg"><a href="../html/productdetails.html?id=${product.id}"><img class="productimg" src="${product.image}" alt=""></a></div>
         <div class="description">
            ${product.name}
         </div>
         <div class="ratings">
             <img class="ratingimg" src="https://supersimple.dev/projects/amazon/images/ratings/rating-${product.rating.stars * 10}.png" alt="">
         </div>
         <div class="price">
             $${convertintodollars(product.priceincents)}
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
         <div>
             <button class="addcartbtn js-add-to-cart" data-productid=${product.id}>Add to Cart</button>
         </div>
     </div>
     `
})

document.querySelector('.frontcontent').innerHTML=allhtml;
document.querySelector('.quantity').innerHTML=displaycartquantity();
search(allhtml)
trigger();
