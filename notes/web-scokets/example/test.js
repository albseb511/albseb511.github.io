const fruitsSellerPrice = [
    {id: 1, name: "apple", priceSeller: '10.90'},
    {id: 2, name: "banana", priceSeller: '11.20'},
    {id: 3, name: "orange", priceSeller: '12.30'},
    {id: 4, name: "framboesa", priceSeller: '13.90'}
];
    
const fruitsBuyPrice = [
    {id: 1, name: "apple", priceBuy: '6.90'},
    {id: 2, name: "banana", priceBuy: '6.20'},
    {id: 3, name: "orange", priceBuy:'7.30'},
    {id: 4, name: "framboesa", priceBuy: '16.90'}
];

const response = fruitsSellerPrice.map( item => ({ ...item, diff: Math.abs( Number(fruitsBuyPrice.find(buy=>buy.name === item.name).priceBuy) - Number(item.priceSeller).toFixed(2)) })).sort((a,b)=>b.diff-a.diff)

console.log(response);