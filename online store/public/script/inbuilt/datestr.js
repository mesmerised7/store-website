import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export function date(deliveryoption){
    const today=dayjs();
    const deliverydate=today.add(deliveryoption.deliverydate,'days');
    const datestring=deliverydate.format('dddd, MMMM D');
    return datestring
}