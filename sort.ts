
const food_itemss = [
    {
        id: 1,
        name: 'Pizza',
        price: 100,
        category: 'Veg'
    },
    {
        id: 2, 
        name: 'Dosa',
        price: 200,
        category: 'Veg'
    },
    {
        id: 3,
        name: 'Biryani',
        price: 300,
        category: 'Non-Veg'
    },
    {
        id: 4, 
        name: 'Chicken Pasta',
        price: 150,
        category: 'Non-Veg'

    },
    {
        id: 5,
        name: 'Shahi Paneer',
        price: 500,
        category: 'Veg'
    }
];

const sorted_items = food_itemss.sort((a, b) => {
    return b.price - a.price;
})
console.log(sorted_items);