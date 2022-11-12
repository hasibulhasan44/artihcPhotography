import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {register, updateUserNameImg} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    if (loading) {
        return <button className='btn loading flex mx-auto'></button>
    }
    const handleRegister = event => {
        event.preventDefault();
        setLoading(true)
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        register(email, password)
        .then(res => {
            const user = res.user;
            setLoading(false)
            toast.success('Registered')
            console.log(user);

            updateUserNameImg(profile)
            .then(res => console.log(res))
            .catch(err => console.error(err));
            navigate('/')
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
            toast.error(err.message)
        });
    }
    return (
        <div className='lg:w-2/5 mt-5 mx-auto p-4'>
            <div>
        <form action="" onSubmit={handleRegister} className="text-center flex flex-col">
          <input
            className="input w-full text-center mx-auto input-bordered mb-4"
            type="text"
            placeholder="Full Name"
            name="name"
          />
          <input
            className="input w-full text-center mx-auto input-bordered mb-4"
            type="text"
            placeholder="photoURL"
            name="photoURL"
          />
          <input
            className="input w-full text-center mx-auto input-bordered mb-4"
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <input
            type="password"
            className="input input-bordered w-full mx-auto text-center"
            placeholder="PassWord"
            name="password"
          />
          <button className="btn mt-4" to="">Register</button>
        </form>
      </div>
      <p className="text-sm text-center mt-4">Forgot password?</p>
      <div>
        <div className="flex justify-between mt-4 items-center">
            <p className="text-sm">Already have an account?</p>
            <Link className="btn" to="/login">Login</Link>
        </div>
        <div className="border-2 border-b-indigo-500  mx-auto mt-4"></div>
      </div>
        </div>
    );
};

export default Register;