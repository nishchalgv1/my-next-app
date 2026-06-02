'use client'
import { useState } from "react";
import { food_items } from "./food_items";

export default function Filter(){
    const [category, setCategory] = useState("");

    let filtered_cat = [...food_items];

    if(category === "") filtered_cat = [];

    if(category === 'Veg'){
        filtered_cat = filtered_cat.filter((food) => {
            return food.category === 'Veg';
        })
    }

    if(category === 'Non-Veg'){
        filtered_cat = filtered_cat.filter((food) => {
            return food.category === 'Non-Veg';
        })
    }

    function handleChange(e:any){
        setCategory(e.target.value);
    }
    return (
        <>
        <h1>Filtered food items: </h1>
        <select value={category} onChange={handleChange}>
            <option value="All">All</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
        </select>
        <br /><br />
        {
            filtered_cat.map((food_item) => (
                <div key={food_item.id}>
                    <h2>{food_item.name}</h2>
                    <h3>{food_item.category}</h3>
                </div>
            ))
        }
        </>
    )
}