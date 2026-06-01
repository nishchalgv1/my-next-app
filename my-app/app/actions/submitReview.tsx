'use server'

import pool from "../lib/db";
import { revalidatePath } from "next/cache";

export async function submitReview(formData: FormData) {

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const rating = Number(formData.get("rating"));
    const review = formData.get("review") as string;

    await pool.query(
        `INSERT INTO reviews (name, email, rating, review)
         VALUES ($1, $2, $3, $4)`,
        [name, email, rating, review]
    );

    revalidatePath("/reviews");
}

export async function getAllReviews() {

    const result = await pool.query(
        `SELECT * FROM reviews ORDER BY created_at DESC`
    );

    return result.rows;
}