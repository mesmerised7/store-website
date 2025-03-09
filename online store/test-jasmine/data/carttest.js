import {cart,loadfromlocalstorage,addtocart} from '../../data/cart.js';
describe('test suite: to test cart',()=>{
    it('adding a product when already in cart',()=>{
        spyOn(localStorage,'setItem')
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([
                {
                    productid:1,
                    quantity:1,
                    deliveryid:'1'
                    }
            ]);
        })
        loadfromlocalstorage()
        addtocart(1)
        expect(cart[0].quantity).toEqual(2)
    })
    it('adding a product to cart',()=>{
        spyOn(localStorage,'setItem')
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        })
        loadfromlocalstorage()
        addtocart(1)
        expect(cart.length).toEqual(1)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(cart[0].productid).toEqual(1)
        expect(cart[0].quantity).toEqual(1)
    })
})