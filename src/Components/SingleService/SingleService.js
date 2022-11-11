import React from "react";
import { Link } from "react-router-dom";

const SingleService = (props) => {
    const { name, img, price, description, _id } = props.service;
    return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src={img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title h-40 align-middle flex justify-center text-white">{name}</h2>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 100)}...</p>
          <p className="text-xl font-bold">Price{price}$</p>
          <div className="card-actions">
            <Link to={`/serviceDetails/${_id}`} className="btn btn-primary" >Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
