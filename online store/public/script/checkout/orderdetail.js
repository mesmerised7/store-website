import {cart} from '../../data/cart.js'
import { getdelivery } from '../../data/deliverydate.js';
import {getproduct} from '../../data/products.js'
import { convertintodollars } from '../inbuilt/price.js'; 
export function renderoderdetails(){
    let productsprice=0;
    let Shipingcost=0;
    cart.forEach((cartitem)=>{
        console.log(cartitem)
       const matchingitem=getproduct(cartitem.productid);
       productsprice+=matchingitem.priceincents*cartitem.quantity
       const delivery=getdelivery(cartitem.deliveryid)
       Shipingcost+=delivery.pricecents
    })
    const beforetax=productsprice+Shipingcost;
    const tax=beforetax*0.1;
    const totalcost=beforetax+tax;
    let totalhtml=`
        <div class="bill-inside">
        <div class="ordertitle">Order Summary</div>
        <div class="noitems">
            <div>Items (25):</div>
            <div>$${convertintodollars(productsprice)}</div>
            </div>
        <div class="shippingcost">
            <div>Shipping & handling:</div>
            <div>$${convertintodollars(Shipingcost)}</div>
        </div>
        <div class="totalbeforetax">
            <div>Total before tax:</div>
            <div>$${convertintodollars(beforetax)}</div>
        </div>
        <div class="tax">
            <div>Estimated tax (10%):</div>
            <div>$${convertintodollars(tax)}</div>
        </div>
        <hr>
        <div class="totalcost">
            <div>Order total:</div>
            <div>$${convertintodollars(totalcost)}</div>
        </div>
        <div class="orderbtndiv">
        <button class="orderbtn">place your order</button>
        </div>
        </div>
    `;
    document.querySelector('.bill').innerHTML=totalhtml;
}