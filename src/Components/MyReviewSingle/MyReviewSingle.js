import React from "react";
import { FaUser } from "react-icons/fa";
import {AiTwotoneDelete, AiTwotoneEdit} from 'react-icons/ai';
import { Link } from "react-router-dom";

const SingleReview = (props) => {
    const { name, email, img, review, serviceName, _id, dateTime } = props.review;
  const { date, hh, mm } = dateTime;
  const dateSliced = date.slice(0, 10);
  const handleDeleteReview = props.handleDeleteReview;
  return (
    <div className="mt-5 ml-3 mb-3 border bg-gray-700 border-slate-600 text-white rounded-xl p-6">
      <div className="leading-none flex items-center">
        {img ? (
          <img
            className="border border-gray-600 rounded-full w-12"
            src={img}
            alt="avatar"
          ></img>
        ) : (
          <FaUser className="border border-gray-500 rounded-full"></FaUser>
        )}
        <div className="flex justify-between lg:w-full items-center">
          <p className="text-xl">{name ? name : 'username not found'}</p>
          <small className="ml-5">{`${dateSliced}, ${hh}:${mm}`}</small>
          <div>
            <Link to={`/editReview/${_id}`} className="flex mb-3 btn btn-sm btn-outline btn-ghost text-white"><AiTwotoneEdit></AiTwotoneEdit>Edit</Link>
            <Link onClick={handleDeleteReview} className="flex btn btn-sm btn-outline btn-ghost text-white"><AiTwotoneDelete></AiTwotoneDelete>Delete</Link>            
          </div>
        </div>
      </div>
      <p className="leading-none ml-4">{email}</p>
      <p className="ml-4 text-lg">{`Reviewed on: "${serviceName}" service`}</p>
      <p className="ml-4">{`${review}`}</p>
    </div>
  );
};

export default SingleReview;
