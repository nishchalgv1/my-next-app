//for loop
// for of loop
// for in 
// forEach

const nums = [1, 2, 3, 4, 5];
for(let i = 0; i < nums.length; i++){
    const elem = nums[i];
    console.log(elem);
}
console.log("\n");
nums.forEach((elem) => {
    console.log(elem);
})
const fruits = ["Apple", "Banana", "Orange", "Grapes"];
// for of
for(const fruit of fruits){
    console.log(fruit);
}

// need indexes
const food_items = ['Pasta', 'Maggi', 'Noodles', 'Momos', 'Onion Dosa'];
// for... in -- index
for(const item_idx in food_items){
    console.log(item_idx);
}
console.log("\n\n\n");
const items = [
    {
        id: 1,
        name: 'Macbook'
    },
    {
        id: 2,
        name: 'ipad'
    },
    {
        id: 3,
        name: 'pixel 10'
    },
    {
        id: 4,
        name: 'magic mouse'
    }
];

for(const item of items){
    console.log(item.name);
}