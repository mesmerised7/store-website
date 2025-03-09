import {convertintodollars} from '../../script/inbuilt/price.js';
describe('testsuite: format currecy test',()=>{
    it('test 0',()=>{
        expect(convertintodollars(0)).toEqual('0.00')
    })
    it('test round',()=>{
        expect(convertintodollars(2000.5)).toEqual('20.01')
    })
    it('test normal convert',()=>{
        expect(convertintodollars(2059)).toEqual('20.59')
    })
})