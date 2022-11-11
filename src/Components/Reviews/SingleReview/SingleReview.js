import React from "react";
import { FaUser } from "react-icons/fa";

const SingleReview = (props) => {
  const { name, email, img, review, dateTime } = props.review;
  const { date, hh, mm } = dateTime;
  const dateSliced = date.slice(0, 10);
  return (
    <div className="ml-3 mb-3 border bg-gray-700 border-slate-600 text-white rounded-xl p-6">
      <div className="leading-none flex items-center">
        {img ? (
          <img
            className="border border-gray-600 rounded-full w-8"
            src={img}
            alt="avatar"
          ></img>
        ) : (
          <FaUser className="border border-gray-500 rounded-full"></FaUser>
        )}
        <div className="flex justify-between items-center">
          <p>{name}</p>
          <small className="ml-5">{`${dateSliced}, ${hh}:${mm}`}</small>
        </div>
      </div>
      <small className="leading-none ml-4">{email}</small>
      <p className="ml-4">{`"${review}"`}</p>
    </div>
  );
};

export default SingleReview;
