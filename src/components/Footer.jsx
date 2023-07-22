import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  import{MdLocationOn} from "react-icons/md"

const Footer = () => {
    return (
        <footer 
        className="grid grid-cols-1 md:grid-cols-2 py-16 px-9 bg-stone-800 text-gray-200 lg:grid-cols-4 items-start  md:justify-items-center">
          <div className="flex flex-col md:flex-row my-5  gap-5">
            <MdLocationOn className="text-2xl"></MdLocationOn>
            <div>
              <p>H#000 (0th Floor), Road #00,</p>
              <p>New DOHS, Mohakhali</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="my-5">
            <h1 className="text-xl font-bold mb-3">Company</h1>
            <p>About</p>
            <p>Projects</p>
            <p>Services</p>
          </div>
          <div className="my-5">
            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
            <p>About</p>
            <p>Projects</p>
            <p>Services</p>
          </div>
          <div>
            <h3 className="text-xl font-bold ">About Us</h3>
            <p className="my-5">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, at.
            </p>
            <div className="flex gap-5 text-2xl">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
              <FaYoutube></FaYoutube>
            </div>
          </div>
        </footer>
    );
};

export default Footer;