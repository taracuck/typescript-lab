"use strict";
let mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
let mountains2 = [];
const findNameOfTallestMountain = (mountainArray) => {
    if (mountainArray.length === 0) {
        return "";
    }
    else {
        return mountainArray.reduce((accumulator, currentValue) => {
            return accumulator.height > currentValue.height
                ? accumulator
                : currentValue;
        }).name;
    }
};
console.log(findNameOfTallestMountain(mountains));
console.log(findNameOfTallestMountain(mountains2));
let products = [
    {
        name: "water",
        price: 1.25,
    },
    {
        name: "snickers",
        price: 1.0,
    },
    {
        name: "gummy bears",
        price: 2.0,
    },
    {
        name: "ham and cheese sandwich",
        price: 5.0,
    },
];
let products2 = [];
const calcAverageProductPrice = (productArray) => {
    let total = 0;
    if (productArray.length === 0) {
        return total;
    }
    else {
        productArray.forEach((product) => {
            total += product.price;
        });
        let averagePrice = total / productArray.length;
        return averagePrice;
    }
};
console.log(calcAverageProductPrice(products));
console.log(calcAverageProductPrice(products2));
let inventory = [
    {
        product: {
            name: "motor",
            price: 10.0,
        },
        quantity: 10,
    },
    {
        product: {
            name: "sensor",
            price: 12.5,
        },
        quantity: 4,
    },
    {
        product: {
            name: "LED",
            price: 1.0,
        },
        quantity: 20,
    },
];
const calcInventoryValue = (inventoryItemsArray) => {
    let total = 0;
    if (inventoryItemsArray.length === 0) {
        return total;
    }
    else {
        inventoryItemsArray.forEach((item) => {
            total += item.product.price * item.quantity;
        });
        return total;
    }
};
console.log(calcInventoryValue(inventory));
