import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const {googleSignIn, logIn, githubSignIn} = useContext(AuthContext);
  const googleAuthProvider =new GoogleAuthProvider();
  const githubAuthProvider =new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false)

  const from = location?.state?.from.pathname || '/'

  const handleLogin = event =>{
    event.preventDefault();
    setLoading(true)
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
    .then(res => {
      const user = res.user
      setLoading(false)
      toast.success('Successfully logged in')
      console.log(user);
      // jwt token
      const currentUser = {
        email: user.email
      }

      fetch('http://localhost:5000/jwt',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('artihcToken', data.token)
        navigate(from, { replace: true });
      })
    })
    .catch(err => {
      setLoading(false)
      toast.error(err.message)
      console.error(err)
    })
  }

  const handleGoogleSignIn = () =>{
    setLoading(true)
    googleSignIn(googleAuthProvider)
    .then(res => {
      const user = res.user;
      toast.success('Successfully logged in')
      console.log(user);
      setLoading(false)
    })
    .catch(err => {
      setLoading(false)
      toast.error(err.message)
      console.error(err)
    })
  }

  const handleGithubSignIn =()=>{
    setLoading(true)
    githubSignIn(githubAuthProvider)
    .then(res => {
      const user = res.user;
      toast.success('Successfully logged in')
      console.log(user);
      setLoading(false)
    })
    .catch(err => {
      setLoading(false)
      toast.error(err.message)
      console.error(err)
    })
  }
  if (loading) {
    return <button className='btn loading flex mx-auto'></button>
}
  return (
    <div className="lg:w-2/6 mx-auto mt-12 border-4 border-slate-500 p-4 rounded-lg">
      <div>
        <form action="" onSubmit={handleLogin} className="text-center flex flex-col">
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
          <button className="btn mt-4" to="">Login</button>
        </form>
      </div>
      <p className="text-sm text-center mt-4">Forgot password?</p>
      <div>
        <div className="flex justify-between mt-4 items-center">
            <p className="text-sm">Don't have an account?</p>
            <Link className="btn" to="/register">Register</Link>
        </div>
        <div className="border-2 border-b-indigo-500  mx-auto mt-4"></div>
      </div>
      <div className="mt-4 lg:flex lg:flex-row flex flex-col justify-around items-center">
        <button onClick={handleGithubSignIn} className="btn">Continue With Github</button>
        <p className="ml-2 mr-2">OR</p>
        <button onClick={handleGoogleSignIn} className="btn">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
