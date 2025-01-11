// reduce

const myNums = [1, 2, 3];

const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0 )
// 0 is initial value of accumulator

// console.log(myTotal);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// add these prices
const priceToPay = shoppingCart.reduce( (acc, item) => acc+ item.price, 0);
console.log(priceToPay);

