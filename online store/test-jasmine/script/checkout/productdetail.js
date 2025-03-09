import {rendercheckouthtml} from '../../../script/checkout/productdetails.js';
import {loadfromlocalstorage} from '../../../data/cart.js';
describe('test suite: display product details',()=>{
    it('cartproduct details displayed',()=>{
        document.querySelector('.js-cartproduct-render').innerHTML=`<div class="js-cart-products"></div>`;
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productid:1,
                quantity:2,
                deliveryid:'1'
            },{
                productid:2,
                quantity:1,
                deliveryid:'2'
            }]);
        })
        loadfromlocalstorage();
        rendercheckouthtml()
        // expect(document.querySelectorAll('js-cartproducts').length).toEqual(1)
    })
})