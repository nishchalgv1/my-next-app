import { submitReview } from "../actions/submitReview";
import { getAllReviews } from "../actions/submitReview";
import SubmitButton from "../components/SubmitButton";

async function ReviewsPage() {

    const reviews = await getAllReviews();

    // calculate average rating
    const avgRating =
        reviews.length > 0
            ? (
                reviews.reduce((acc:any, r:any) => acc + r.rating, 0) /
                reviews.length
              ).toFixed(1)
            : 0;

    return (
        <>
            <h1>Product Reviews</h1>

            <h3>⭐ Average Rating: {avgRating} / 5</h3>

            <form action={submitReview}>
                <input name="name" placeholder="Name" />
                <br /><br />

                <input name="email" placeholder="Email" />
                <br /><br />

                <input
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    placeholder="Rating (1-5)"
                />
                <br /><br />

                <textarea
                    name="review"
                    placeholder="Write review"
                    rows={4}
                    cols={40}
                />

                <br /><br />

                <SubmitButton />
            </form>

            <hr />

            {reviews.map((r:any) => (
                <div key={r.id}>
                    <h3>{r.name}</h3>
                    <p>{r.email}</p>
                    <p>⭐ Rating: {r.rating}</p>
                    <p>{r.review}</p>
                    <hr />
                </div>
            ))}
        </>
    );
}

export default ReviewsPage;