import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaArrowCircleRight,
} from "react-icons/fa";

import logo from "../assets/organicfiberlogo.svg"
import leaf from "../assets/leaf.svg"

const Footer = () => {
  return (
    <div className="relative pt-40 mt-10">
      <div className="bg-amber-100 px-8 pt-36 rounded-t-[130px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0 ">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Organic Fiber Logo" className="h-12" />
            </div>

            <div className="flex space-x-4 ml-4 text-gray-900">
              <a href="#" className=" hover:text-darkGreen">
                <FaFacebookSquare size={20} />
              </a>
              <a href="#" className=" hover:text-darkGreen">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-darkGreen">
                <FaTwitterSquare size={20} />
              </a>
              <a href="#" className="hover:text-darkGreen">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>


          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">
              Customer care
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-darkGreen">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-darkGreen">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-darkGreen">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Our Policies */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">
              Our policies
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-darkGreen">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-darkGreen">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-darkGreen">
                  Terms Of Service
                </a>
              </li>
            </ul>
          </div>

          {/*contact*/}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-gray-800">
              Contact us
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">569-852-1235</li>
              <li className="text-gray-600">organic@company.com</li>
              <li className="text-gray-600">organic@.com</li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-center text-sm text-gray-500">
          © 2024, Organic Fiber
        </div>
      </div>

      {/*newsletter  */}

      <div className="absolute top-0 left-0 right-0 mx-20">
        <div className="bg-darkGreen rounded-3xl p-14 text-white relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0">
            <img src={leaf} alt="" className="w-32" />
          </div>

          <div className="absolute -bottom-2 -left-2">
            <img src={leaf} alt="" className="w-32 rotate-90" />
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-3 text-center">
              Stay Connected, Stay Informed
            </h2>
            <p className="mb-10 text-emerald-100 text-center">
              Subscribe to receive exclusive updates, tips, and promotions
              straight to your inbox. Join our community for expert advice and
              resources to support your care journey.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address here"
                className="p-2 px-4 rounded-l-full w-full text-gray-800 bg-white"
              />
              <button className="bg-brightGreen p-2 rounded-r-full hover:bg-green-900 transition-colors">
                <FaArrowCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;