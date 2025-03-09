import {convertintodollars} from '../script/inbuilt/price.js';
console.log('test suite: money tests')
console.log('round test')
if (convertintodollars(2000.5)==='20.01'){
    console.log('passed')
}
else{
    console.log('failed')
}
console.log('0 test')
if (convertintodollars(0)==='0.00'){
    console.log('passed')
}
else{
    console.log('failed')
}
console.log('normal test')
if (convertintodollars(4569)==='45.69'){
    console.log('passed')
}
else{
    console.log('failed')
}