const food_items = [
    'Burger',
    'Biryani',
    'Dosa',
    'Pizza',
    'Idli'
];

const foods = [
    {
        id: 1,
        name: 'Pizza',
        price: 100
    },
    {
        id: 2, 
        name: 'Dosa',
        price: 200
    },
    {
        id: 3,
        name: 'Biryani',
        price: 300
    }
];
// hoisting closures,
const search_word = 'd';

const filtered_food_items = foods.filter((food) => {
    return food.name.toLowerCase().includes(search_word.toLowerCase());
})
console.log(filtered_food_items);

// I want to search -- Piz  prefix - Pi or pi 


// filter method - return a new array
const filtered_items = food_items.filter((food) => {
    return food.toLowerCase().includes(search_word.toLowerCase());
})

console.log("filtered foods: ", filtered_items);