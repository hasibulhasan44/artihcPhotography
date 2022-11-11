import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Reviews from "../Reviews/Reviews";
// import useTitleHook from "../../Hooks/useTitleHook";

const ServiceDetails = () => {
//   useTitleHook("Service Details");
  const data = useLoaderData();
  const { img, name, price, ratings, facilities, description } = data[0];
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 ml-8">
        <div className="col-span-2">
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="rounded-xl" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
          <div className="flex justify-between mx-auto w-4/5">
            <h2 className="text-4xl font-bold mb-3">{name}</h2>
            <p>
              {ratings === 5 ? (
                <span className="flex mt-3 items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar /> =
                  {ratings}
                </span>
              ) : (
                <span className="flex mt-3 items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span className="font-bold ml-2">{ratings}</span>
                </span>
              )}
            </p>
          </div>
          <p className="mb-3">{description}</p>
          {facilities ? (
            <div>
              <h4 className="font-semibold">Advantages:</h4>
              <ul>
                {facilities?.map((point) => (
                  <li key={point} className="ml-3 flex items-center">
                    <BsFillArrowRightCircleFill className="mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Facilities Not Found</p>
          )}
          <h3 className="text-2xl mt-3 font-semibold">
            Price: <span>{price}$</span>
          </h3>
          <Link className="btn btn-primary mt-3 mx-auto text-center">
            CheckOut
          </Link>
        </div>
        <div>
          <Reviews service={data}></Reviews>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
