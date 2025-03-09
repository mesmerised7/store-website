import {cart,deletefromcart,displaycartquantity,updatedeliveryid,updateaddtocart} from '../../data/cart.js';
import {convertintodollars} from '../inbuilt/price.js'
import { getproduct} from '../../data/products.js';
import {date} from '../inbuilt/datestr.js'
import {deliverydates} from '../../data/deliverydate.js'
import { renderoderdetails } from './orderdetail.js';
export function rendercheckouthtml(){
    let allhtml=``;
    function displayallcarthtml(){
        cart.forEach((cartitem)=>{
            const productid=cartitem.productid;
            let matchingitem=getproduct(productid);
            const deliveryoptionid=cartitem.deliveryid;
            let deliveryoption;
            deliverydates.forEach((deliverydate)=>{
                if (deliverydate.deliveryid===deliveryoptionid){
                    deliveryoption=deliverydate;
                }
            })
            allhtml+=`
                <div class="cartproduct js-cartproducts cartproduct-${matchingitem.id}">
                    <div class="delivery-heading delivery-heading-${matchingitem.id}" data-deliveryid=${matchingitem.id} style="padding-bottom: 21px;">
                       ${date(deliveryoption)}
                    </div>
                <div class="productdetailgrid">
                    <div class="productimgdiv"><img class="productimg" src=${matchingitem.image} alt=""></div>
                    <div class="contentdetails">
                       <div class="productname">${matchingitem.name}</div>
                       <div class="productprice">$${convertintodollars(matchingitem.priceincents)}</div>
                       <span class="productquantity">Quantity: ${cartitem.quantity} </span>
                       <a class="js-link-update update-${cartitem.productid} cartupbtn "><span class="js-update js-updateid-${cartitem.productid}" data-updateid=${cartitem.productid}>update</span></a>
                       <a class="js-link-delete cartdelbtn" data-deleteid=${cartitem.productid}><span>delete</span></a>
                    </div>
                    <div class="dilverydateoptions">
                        <div class="dilveryheading">Choose a delivery option:</div>
                        <div class="dilveryoptions">
                            ${displaydates(matchingitem,cartitem)}
                        </div>
                    </div>
                </div>
                </div>`
        })
        renderoderdetails()
        document.querySelector('.js-cart-products').innerHTML=allhtml;
        
    }

    function displaydates(matchingitem,cartitem){
        let alldates=``;
        deliverydates.forEach((deliveryoption)=>{
            const ischecked = deliveryoption.deliveryid===cartitem.deliveryid
            const pricestring=deliveryoption.pricecents==0 ? 'FREE':`${convertintodollars(deliveryoption.pricecents)}-`
            alldates+=`<div class="deliveryoption" data-delivery-option-id=${deliveryoption.deliveryid} data-product-id=${matchingitem.id}>
                <input ${ischecked?'checked':''} type="radio" name="radio-for-${matchingitem.id}">
                <div>
                    <div class="deliverydate">${date(deliveryoption)}</div>
                    <div class="deliveryprice">$${pricestring} Shiping</div>
                </div>
            </div>
            `;
        })
        return alldates;
    }
    displayallcarthtml();
    document.querySelectorAll('.deliveryoption').forEach((deliveryoption)=>{
        const {deliveryOptionId,productId}=deliveryoption.dataset;
        deliveryoption.addEventListener('click',()=>{
            updatedeliveryid(productId,deliveryOptionId);
            rendercheckouthtml();
          
        }) 
    })
    document.querySelector('.checkout').innerHTML=`Checkout(${displaycartquantity()} item)`
    function renderupdate(){
        document.querySelectorAll('.js-update').forEach((updatebtn)=>{
            updatebtn.addEventListener('click',()=>{
            const updateid=updatebtn.dataset.updateid
            console.log(updateid)
            // console.log(document.querySelector(`.js-updateid-${updateid}`).innerText)
            if (document.querySelector(`.js-updateid-${updateid}`).innerText==='updated'){
                getinputfromupdate(updateid)
                document.querySelector(`.update-${updateid}`).innerHTML=`<span class="js-update js-updateid-${updateid}" data-updateid=${updateid}>update</span>`
                
            }
            else{
                console.log('clicked')
                document.querySelector(`.update-${updateid}`).innerHTML=`<input class="update-cart-item" style="width:50px;"><span class="js-update js-updateid-${updateid}" data-updateid=${updateid}>updated</span>`
                
                }
                
            renderupdate()
            })
        })
    }
    renderupdate()
    function getinputfromupdate(id){
        updateaddtocart(id,document.querySelector('.update-cart-item').value)
        rendercheckouthtml()
    }
    
    document.querySelectorAll('.js-link-delete').forEach((link)=>{
        link.addEventListener('click',()=>{
            const productid=link.dataset.deleteid;
            deletefromcart(productid);
            const container=document.querySelector(`.cartproduct-${productid}`);
            document.querySelector('.checkout').innerHTML=`Checkout(${displaycartquantity()} item)`
            container.remove();
           rendercheckouthtml()
        })
    })
}