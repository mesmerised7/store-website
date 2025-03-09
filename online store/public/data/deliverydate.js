export const deliverydates=[{
    deliveryid:'1',
    deliverydate:7,
    pricecents:0
},{
    deliveryid:'2',
    deliverydate:3,
    pricecents:495
},
{
    deliveryid:'3',
    deliverydate:1,
    pricecents:999    
}
]
export function getdelivery(pid){
    let delivery;
    deliverydates.forEach((deliverydate)=>{
      if (deliverydate.deliveryid===pid){
        delivery=deliverydate;
      }
    })
    return delivery || deliverydates[0]
}