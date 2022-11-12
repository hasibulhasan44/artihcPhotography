import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://artihc-photography-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <button className="btn loading flex mx-auto"></button>;
  }
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4">
        {services.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
