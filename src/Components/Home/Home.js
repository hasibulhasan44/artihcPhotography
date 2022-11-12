import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import img from "../../images/just-logo.png";
import SingleService from "../SingleService/SingleService";
import LineChartHome from "./LineChartHome/LineChartHome";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://artihc-photography-server.vercel.app/home/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="lg:flex lg:justify-between mt-4 bg-gray-300 p-4 rounded-lg items-center">
        <img
          className="lg:w-1/4 mb-4 border-2 border-slate-500 rounded-2xl mr-4"
          src={img}
          alt=""
        />
        <p className="text-xl">
          ARTIHC is your best friend who can make your every moment memoriable.
          Every event in your life is very precious to you, we know. We all want
          that all the precious moments in our life should come again and again.
          Though it is not possible in real world to bring the same event twice.
          But it can remain fresh in your mind by just one click. And that CLICK
          from ARTIHC can be your reminder to that event. We value our customers
          and customers generate value for us. We can gurantee that you can not
          find better service than us anywhere.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 mdLgrid md:grid-cols-2 grid grid-cols-1">
        {services?.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Total Customers</div>
            <div className="stat-value">3K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <p className="text-lg w-9/12 mx-auto hidden lg:flex">Clients Response:</p>
      <div className="hidden lg:flex justify-center md:flex md:justify-center mt-8">
        <LineChartHome></LineChartHome>
      </div>
    </div>
  );
};

export default Home;
