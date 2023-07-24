import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { signUpEmailPassword, signInGoogle, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUpEmailPassword(data.email, data.password)
      .then((data) => {
        console.log(data);
        updateUserProfile(data.name, data.photo)
          .then((data) => {
            // const saveUser = {
            //   name: data.name,
            //   email: data.email,
            //   photo: data.photoURL,
            // };
            console.log("Update", data);
          })
          .catch((error) => console.log(error));
        // reset();
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((data) => {
        const savedUser = {
          name: data.user.displayName,
          image: data.user.photoURL,
          email: data.user.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
        .then((res)=> res.json())
        .then((data)=>console.log(data))
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex flex-col justify-center items-center my-10  place-content-center place-items-center">
      <div className="px-7 py-5 border rounded-xl  border-gray-600">
        <h3 className="text-4xl font-bold mt-5 mb-10">Create New Account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
            placeholder="Your Name"
            type="text"
          />
          {errors.name?.type === "required" && <p>Name is required</p>}
          <input
            {...register("email", { required: true })}
            className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
            placeholder="Your Email Address"
            type="email"
          />
          {errors.email && <p>Email is required</p>}
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
            placeholder="Password"
            type="password"
          />
          {errors.password?.type === "required" && <p>Password is required</p>}
          {errors.password?.type === "minLength" && (
            <p>Password Should be at least 6 characters</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have one Uppercase one lower case, one number and
              one special character.
            </p>
          )}
          <input
            {...register("photo", { required: true })}
            type="text"
            placeholder="Photo"
            className="file-input px-2 file-input-bordered border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
          />
          {errors.photo?.type === "required" && <p>Photo is required</p>}
          <input
            className="border border-gray-600 transition-all hover:scale-105 rounded-xl py-2 px-5 hover:bg-stone-800 hover:text-white w-full"
            type="submit"
            value="Register"
          />
        </form>
        <p className="text-center my-5 text-gray-500">
          Already have an account?
          <Link className="text-black font-semibold" to="/login">
            <span> </span> Login
          </Link>
        </p>

        <div className="flex gap-2 flex-col">
          <button
            onClick={handleGoogleLogin}
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

export default Register;
