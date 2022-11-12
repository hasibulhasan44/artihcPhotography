import { Link, useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const EditReview = () => {
  const data = useLoaderData();
  const { name, email, img, review, serviceName, _id, dateTime } = data;
  const { date, hh, mm } = dateTime;
  const dateSliced = date.slice(0, 10);

  const handleReviewEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const editedReview = form.editedReview.value;

    fetch(`https://artihc-photography-server.vercel.app/editReview/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ editedReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Review Updated Successfully");
        }
        form.reset();
      });
  };
  return (
    <div>
      <div className="mt-5 ml-3 mb-3 border bg-gray-700 border-slate-600 text-white rounded-xl p-6">
        <div className="leading-none flex items-center">
          {img ? (
            <img
              className="border border-gray-600 rounded-full w-12 mr-3 mb-2"
              src={img}
              alt="avatar"
            ></img>
          ) : (
            <FaUser className="border border-gray-500 rounded-full"></FaUser>
          )}
          <div className="flex justify-between w-full items-center">
            <p className="text-xl">{name ? name : "username not found"}</p>
            <small className="ml-5">{`${dateSliced}, ${hh}:${mm}`}</small>
          </div>
        </div>
        <p className="leading-none ml-4">{email}</p>
        <p className="ml-4 text-lg">{`Reviewed on: "${serviceName}" service`}</p>
        <form
          className="flex justify-between items-center"
          onSubmit={handleReviewEdit}
        >
          <textarea
            className="textarea w-4/12 text-black"
            placeholder={`${review}`}
            name="editedReview"
          ></textarea>
          <button className="btn btn-sm btn-outline btn-ghost text-white">
            <IoCheckmarkDoneSharp className="mr-2"></IoCheckmarkDoneSharp>Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
