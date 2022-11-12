import React from "react";
import { toast } from "react-toastify";
import useTitleHook from "../../Hooks/UseTitle";

const AddService = () => {
  useTitleHook('Add Service')
  const addService = (event) => {
    event.preventDefault();
    const serviceName = event.target.serviceName.value;
    const photoURL = event.target.photoURL.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const service = {
      name: serviceName,
      price: price,
      img: photoURL,
      description: description,
    };

    fetch("https://artihc-photography-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          toast.success("Service Successfully Added");
        }
      });
  };

  return (
    <div className="mt-5 lg:w-2/5 mx-auto">
      <form
        action=""
        onSubmit={addService}
        className="text-center flex flex-col"
      >
        <input
          className="input w-full text-center mx-auto input-bordered mb-4"
          type="text"
          placeholder="Name of service"
          name="serviceName"
        />
        <input
          className="input w-full text-center mx-auto input-bordered mb-4"
          type="text"
          placeholder="photoURL"
          name="photoURL"
        />
        <textarea
          type="text"
          className="textarea textarea-bordered w-full mx-auto text-center"
          placeholder="Write some information about your service"
          name="description"
        />
        <input
          className="input w-full text-center mx-auto input-bordered mt-4"
          type="text"
          placeholder="Price of service"
          name="price"
        />
        <button className="btn mt-4" to="">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
