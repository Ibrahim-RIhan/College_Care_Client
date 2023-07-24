import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname
  const { signInEmailPassword, signInGoogle } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInEmailPassword(data.email, data.password)
      .then(() => {
        reset();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLoginGoogle = () => {
    signInGoogle()
      .then((data) => {
        const savedUser = {
          name: data.user.displayName,
          image: data.user.photoURL,
          email: data.user.email,
        };
        console.log(data);
        fetch("https://college-care-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true })
          });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex flex-col justify-center items-center my-10  place-content-center place-items-center">
      <div className="px-10 py-5 border rounded-xl md:w-1/3  border-gray-600">
        <h3 className="text-4xl font-bold mt-5 mb-10">Login Now</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
            placeholder="Your Email Address"
            type="email"
          />
          {errors.email?.type === "required" && <p>Email is required</p>}
          <input
            {...register("password", { required: true })}
            className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
            placeholder="Password"
            type="password"
          />
          {errors.password?.type === "required" && <p>Password is required</p>}
          <input
            className="border border-gray-600 transition-all hover:scale-105 rounded-xl py-2 px-5 hover:bg-stone-800 hover:text-white w-full"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center my-5 text-gray-500">
          New to College Care?
          <Link className="text-black font-semibold" to="/register">
            <span> </span> Register
          </Link>
        </p>
        <div className="flex gap-2 flex-col">
          <button
            onClick={handleLoginGoogle}
            className="flex justify-center gap-3 border border-gray-600 transition-all hover:scale-105 rounded-xl py-1 px-3 hover:bg-stone-800 hover:text-white w-full items-center"
          >
            <FaGoogle></FaGoogle>
            <p>Continue with Google</p>
          </button>
          <button className="flex justify-center gap-3 border border-gray-600 transition-all hover:scale-105 py-1 rounded-xl px-3 hover:bg-stone-800 hover:text-white w-full items-center">
            <FaFacebook></FaFacebook>
            <p>Continue with Facebook</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
