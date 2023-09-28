import {useState} from 'react';

export default function ShowReviews() {

    const [reviews, setReviews] = useState([
        {
          "_id": "64931f23755a1426a2343234",
          "restaurant": "Tian Tian Chicken Rice2222",
          "review": "Nice rice and juicy meat",
          "rating": 5
        },
        {
          "_id": "651264db7841ce1f3dedd662",
          "restaurant": "Taco Bell",
          "review": "Great tacos!",
          "rating": 3
        },
        {
            "_id": "651264db7841ce1f3dedd663",
            "restaurant": "Arnold's Chicken",
            "review": "Great fried chicken!",
            "rating": 5
        }
      ]);

      // storing a JSX object in a variable
    const header = <h2>All Reviews</h2>;

    const renderReviews = () => {
        const results = [];
        for (let r of reviews) {
            const eachReview = <div>
                <h3>{r.restaurant}</h3>
                <p>
                    {r.review}
                </p>
                <p>
                    Rating: {r.rating}/5
                </p>
            </div>;

            results.push(eachReview);
        }
        return results;

    }    

    return (
        <>
            {header}

            <ul>
            {renderReviews()}
            {
        // returns a new array
        // each element of the new array is transformed an element in an array
            reviews.map((review,index)=>{
            return  (<div key={review._id}>
            <h3>{review.restaurant}</h3>
            <p>{review.review}</p>
            <p>Rating: {review.rating}/5</p>
          </div>);
            })

            }
            </ul>
        </>
    )
}