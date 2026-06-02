'use client'
import { food_items } from "./food_items";
import { useState } from "react"
export default function Sort(){
    const [order, setOrder] = useState("");

    function handleChange(e:any){
        setOrder(e.target.value);
    }
    let sorted_items = [...food_items];
    if(order === "") sorted_items = [];
    if(order === "low-high"){
        sorted_items = sorted_items.sort((a, b) => {
            return a.price - b.price;
        })
    }

    if(order === "high-low"){
        sorted_items = sorted_items.sort((a, b) => {
            return b.price - a.price;
        })
    }
    return (
        <>
        <h1>Sort Food Items By Price: </h1>
        <select onChange={handleChange} value={order}>
            <option value="low-high">Low - High</option>
            <option value="high-low">High - Low</option>
        </select>

        {
           sorted_items.map((food_item) => (
            <div key={food_item.id}>
                <h2>{food_item.name}</h2>
                <h3>Price: {food_item.price}</h3>
            </div>
           ))
        }
        </>
    )
}