import getProductRatings from "../actions/getProductRatings";
import { getAllReviews } from "../actions/getProductRatings";

async function ProductRatings() {
    const reviews = await getAllReviews();
    console.log("Product reviews: ", reviews);
    const totalRatings = reviews.reduce((accum:number, review:any) => {
        return accum + review.ratings;
    }, 0)

    const avgRatings = reviews.length > 0 ? totalRatings / reviews.length : 0;
    console.log("avg rating: ", avgRatings);
    // logic avg -- reduce function

  return (
    <>
      <h1>Average Ratings: {avgRatings.toFixed(2)}</h1>
      <form action={getProductRatings}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
        />
        <br />
        <br />

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="Enter email" />
        <br />
        <br />

        <label htmlFor="review">Review: </label>
        <textarea
          name="review"
          id="review"
          placeholder="
        Write a review"
        ></textarea>
        <br /><br />
        <label htmlFor="ratings">Ratings: </label>
        <input type="number" name="ratings" id="ratings" min="1" max="5" 
        placeholder="enter" />
        <br />
        <br />
        <button type="submit">Submit Review</button>
      </form>
      <hr />
      <h4>
        {
            reviews.map((review:any, id:number) => (
                <div key={review.id}>
                    <h1>{review.username}</h1>
                    <h3>{review.email}</h3>
                    <p>{review.review}</p>
                    <p>{review.ratings.toFixed(2)}</p>
                    <hr />
                </div>
            ))
        }
      </h4>
    </>
  );
}

export default ProductRatings;
