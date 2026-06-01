'use server'
import { revalidatePath } from "next/cache";
import pool from "../lib/db";

export default async function getProductRatings(formdata: FormData){
    // get everything
    const username = formdata.get("username");
    const email = formdata.get("email");
    const review = formdata.get("review");
    const ratings = formdata.get("ratings");

    // store these details in db
    await pool.query(`
        INSERT INTO Ratings(username, email, review, ratings)
        VALUES ('${username}', '${email}', '${review}', ${ratings})
    `);

    console.log("Review stored successfully...");
    revalidatePath('/ratings');
}

// getAll reviews
export async function getAllReviews(){
    const results = await pool.query(`
        SELECT * FROM Ratings
        `);
    // console.log("Results: ", results);
    return results.rows;
}