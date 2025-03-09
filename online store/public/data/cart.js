export let cart;
loadfromlocalstorage()
export function loadfromlocalstorage(){
    cart = JSON.parse(localStorage.getItem('cart')) || [{
        productid:1,
        quantity:2,
        deliveryid:'1'
    },{
        productid:2,
        quantity:1,
        deliveryid:'2'
    }];
}
export function ls(){
    // localStorage.removeItem('cart')
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtocart(pid){
    let incart;
    cart.forEach((cartproduct) => {
        if (cartproduct.productid===Number(pid)){
            incart=cartproduct;
        }});
    if (incart){
            incart.quantity+=1;
        }
    else{
        cart.push({
                productid:pid,
                quantity:1,
                deliveryid:'1'
                })
        }
        ls()
}
export function updateaddtocart(pid,numberofpro){
      cart.forEach((cartitem)=>{
      if (cartitem.productid===Number(pid)){
         cartitem.quantity+=Number(numberofpro);
        
      }
      })
      ls()
}
export function displaycartquantity(){
    let totalquantity=0;
    cart.forEach((item)=>{
    totalquantity+=item.quantity;
})
    console.log(totalquantity,'fhgfh')
    return totalquantity;
}
export function trigger(){
    let cartbtn=document.querySelectorAll('.js-add-to-cart');
    displaycartquantity()
    cartbtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            const pid=btn.dataset.productid;
            addtocart(Number(pid));
            document.querySelector('.quantity').innerHTML=displaycartquantity();
        })
})
}
export function deletefromcart(productid){
    let newcart=[];
    cart.forEach((cartitem)=>{
        if (cartitem.productid!==Number(productid)){
            newcart.push(cartitem);
        }
    })
   cart=newcart;
   ls()
}
export function updatedeliveryid(pid,deliveryid){
    cart.forEach((cartitem)=>{
        if (cartitem.productid===Number(pid)){
            cartitem.deliveryid=deliveryid;
        }
    })
    ls()

}
