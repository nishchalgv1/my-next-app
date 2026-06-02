// input: text 

'use client'
import { useState } from "react";
import { food_items } from "./food_items";

function Search(){
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");


    const filtered_items = search === "" ? [] : food_items.filter((food) => {
        return food.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log("filtered: ", filtered_items);

    function handleChange(e:any){
        setInput(e.target.value)
    }
    function handleClick(){
        setSearch(input);
    }

    return (
        <>
        <h1>Search Food items here: </h1>
        <label htmlFor="search-item">Search</label>
        <input onChange={handleChange} type="text" id="search-item"
        value={input}/>
        <br /><br />
        <button onClick={handleClick} value={search}>Search</button>

        { 
            filtered_items.map((food_item) => (
                <div key={food_item.id}>
                    <h2>{food_item.name}</h2>
                    <p>Price: ₹ {food_item.price}</p>
                </div>
            )) 
        }
        <br />
        <br />
        </>
    )
}

export default Search;




