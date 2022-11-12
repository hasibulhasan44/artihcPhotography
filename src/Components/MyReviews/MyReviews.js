import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewSingle from '../MyReviewSingle/MyReviewSingle';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    // const {logOut} = useContext(AuthContext);
    const [reFetch, setReFetch] = useState(false);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data)) 
    }, [user?.email, reFetch])
    
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/myReviews?email=${user?.email}`,
    //     {
    //         headers: {
    //           authorization: `Bearer ${localStorage.getItem("artihcToken")}`,
    //         },
    //       })
    //     .then((res) => {
    //         if (res.status === 401 || res.status === 403) {
    //           return 
    //         }
    //         res.json();
    //       })
    //     .then(res => res.json())
    //     .then(data => setReviews(data)) 
    // }, [user?.email])

    const handleDeleteReview = (id) =>{
        const proceed = window.confirm("Delete this review?")
        if (proceed) {
            fetch(`http://localhost:5000/myReviews/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Review deleted successfully')
            setReFetch(true)
        })
        .catch(err => console.error(err));
        }
    }

    return (
        <div>
            <div>
                {
                    reviews.map(review => <MyReviewSingle
                        key={review._id}
                        review = {review}
                        handleDeleteReview ={()=>handleDeleteReview(review._id)}
                    ></MyReviewSingle>)
                }
            </div>
        </div>
    );
};

export default MyReviews;