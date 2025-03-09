import { convertintodollars } from "../script/inbuilt/price.js";
export const products = [{
    id:1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3XuH4sUIk4fdtkyAQ8XszAcXilAVuX699w&s',
    name: 'Black and Gray Athletic Cotton Socks',
    rating:{stars:4.5,count:87},
    description: '',
    priceincents:1090,
    keywords:['jujutsu kaisen','fff']
    
},
{
    id:2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpT8KbTEzeOcjh_DGlEezXSCNtpj9xLKgD3g&s',
    name: 'Intermediate Size Basketball',
    rating:{stars:0.4,count:127},
    description: '',
    priceincents:2095,
    keywords:['jujutsu kaisen']

},
{
    id:3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3HUPAqgHlNpOdoulJLAeJItiY8NiwiiGxA&s',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating:{stars:4.5,count:56},
    description: '',
    priceincents:799,
    keywords:[]
},
{
    id:4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3HUPAqgHlNpOdoulJLAeJItiY8NiwiiGxA&s',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating:{stars:4.5,count:56},
    description: '',
    priceincents:799,
    keywords:[]
},
{
    id:5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3HUPAqgHlNpOdoulJLAeJItiY8NiwiiGxA&s',
    name: 'abcd',
    rating:{stars:4.5,count:56},
    description: 'very good',
    priceincents:50000,
    keywords:[]
}
]
export function getproduct(productid){
    let matchingitem;
    products.forEach((product)=>{
    if (product.id===Number(productid)){
        matchingitem=product;
    }
    })
    return matchingitem
}
export function search(allhtml){
    document.querySelector('.searchbtn').addEventListener('click',()=>{
        let foundproducts=[];
        let newhtml=``;
        if (document.querySelector('.search').value===''){
            document.querySelector('.frontcontent').innerHTML=allhtml;
        }
        products.forEach((product)=>{
            let keywords=product.keywords
            keywords.forEach((keyword)=>{
                if (keyword===document.querySelector('.search').value){
                    foundproducts.push(product)
                }
            })
        })
        if (foundproducts.length!==0){
            foundproducts.forEach((product)=>{
                newhtml+=`<div class="o productdetails">
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
            document.querySelector('.frontcontent').innerHTML=newhtml;
        }
    })
}