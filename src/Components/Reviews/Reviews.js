import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import SingleReview from "./SingleReview/SingleReview";
// import SingleReview from "./SingleReview";
// import {toast} from 'react-toastify';

const Reviews = (props) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const { _id, name } = props.service[0];
  const [reFetch, setReFetch] = useState(false);
  const location = useLocation();
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, reFetch]);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const date = new Date();
    const hh = new Date().getHours();
    const mm = new Date().getMinutes();

    const review = {
      name: user?.displayName,
      email: user?.email,
      img: user?.photoURL,
      serviceName: name,
      serviceId: _id,
      review: message,
      timeStamp: new Date(),
      dateTime: { date, hh, mm },
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.acknowledged === true) {
          toast.success("review added");
          setReFetch(true);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <div className="border overflow-scroll h-screen bg-gray-200 border-slate-500 p-6 rounded-xl mx-auto">
          <p className="text-xl mb-2">Reviews:</p>
          <div>
            {reviews?.length === 0 ? (
              <p>No reviews to show</p>
            ) : (
              <div>
                {reviews.map((review) => (
                  <SingleReview key={review._id} review={review}></SingleReview>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mx-auto rounded-xl bg-gray-300">
          <form onSubmit={handleAddReview}>
            <div className="form-control w-full border p-5 rounded-xl border-gray-500">
              <label className="label">
                <span className="label-text">Add a review</span>
              </label>
              {user?.uid ? (
                <>
                    <textarea
                  type="text"
                  placeholder="Write a meaningful review. It can really help us to improve!"
                  className="textarea textarea-bordered w-full max-w-xs"
                  disabled={false}
                  name="message"
                />
                <button className="btn btn-primary mt-4">Submit
                </button>
                </>
              ) : (
                <>
                  <p className="mb-2">
                    <Link
                      to="/login"
                      state={{ from: location }}
                      className="underline text-blue-700"
                    >
                      Login
                    </Link>{" "}
                    to review us!
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
