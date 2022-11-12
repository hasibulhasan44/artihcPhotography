import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import MyReviewSingle from "../MyReviewSingle/MyReviewSingle";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  // const {logOut} = useContext(AuthContext);
  const [reFetch, setReFetch] = useState(false);
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://artihc-photography-server.vercel.app/myReviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("artihcToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, reFetch]);

  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Delete this review?");
    if (proceed) {
      fetch(`https://artihc-photography-server.vercel.app/myReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Review deleted successfully");
          setReFetch(true);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      {reviews.length === 0 ? (
        <p className="text-center">You haven't reviewed any service.</p>
      ) : (
        <div>
          {reviews.map((review) => (
            <MyReviewSingle
              key={review._id}
              review={review}
              handleDeleteReview={() => handleDeleteReview(review._id)}
            ></MyReviewSingle>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
