import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { BsArrowRight, BsStars } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
//import for herosection
import heroImage1 from "../assets/LandingPage/heroImage1.png";
import { categories, featuredProducts } from "./landingPagedata";

import defaultImage from "../assets/LandingPage/defaultImage.jpg";
import { useNavigate } from "react-router-dom";

const colorsInHero = [
  "from-green-900 to-green-700",
  "from-green-800 to-emerald-600",
  "from-emerald-800 to-teal-600",
];

const heroSlides = [
  {
    title: "Eco-Friendly Hemp Collection",
    subtitle: "Sustainable fashion for a greener future",
    button: "Shop Now",
    image: heroImage1,
  },
  {
    title: "New Cannabis Fiber Arrivals",
    subtitle: "Comfort meets sustainability",
    button: "Explore",
    image: heroImage1,
  },
  {
    title: "Organic Accessories",
    subtitle: "Complete your look responsibly",
    button: "View Collection",
    image: heroImage1,
  },
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isPaused]);

  const heroButtonHandler = () => {
    navigate("/products");
  };

  return (
    <div className="w-full">
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                colorsInHero[index % 3]
              } opacity-70`}
            ></div>
            <div className="relative h-full flex justify-center items-center">
              <img
                src={slide.image}
                className="h-full object-contain py-10"
                alt={slide.title}
              />
              <div className="absolute flex flex-col gap-3 items-center text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                <span className="text-3xl md:text-5xl font-bold text-center">
                  {slide.title}
                </span>
                <span className="text-lg md:text-xl text-center">
                  {slide.subtitle}
                </span>
                <button
                  onClick={heroButtonHandler}
                  className="shadow-xl shadow-gray-600 cursor-pointer p-2 px-5 rounded-full text-darkGreen bg-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl z-30 relative"
                >
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute flex text-white h-10 w-10 cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/10 rounded-full transition-all duration-300 hover:bg-white/20 z-20"
        >
          <FaAngleLeft className="mx-auto my-auto" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute flex text-white h-10 w-10 cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/10 rounded-full transition-all duration-300 hover:bg-white/20 z-20"
        >
          <FaAngleRight className="mx-auto my-auto" size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? "bg-white w-6" : "bg-white/50 w-2"
              }`}
            ></button>
          ))}
        </div>
      </section>
      <section className="mt-10 text-center space-y-3">
        <h1 className="text-4xl font-bold">Why Choose Organic Fiber?</h1>
        <span className="text-lg">
          Sustainable, ethical and eco-friendly products for a better tomorrow
        </span>
        <div className="grid md:grid-cols-3  gap-10 md:gap-5 mt-20 mb-10 place-items-center">
          {[
            {
              icon: <BsStars size={28} />,
              title: "Eco-Friendly Materials",
              desc: "All our products are made from sustainable hemp and cannabis fibers that reduce environment impact.",
            },
            {
              icon: <CiGlobe size={28} />,
              title: "Ethically Sourced",
              desc: "We ensure fair trade practices and support local communities through our responsible supply chain.",
            },
            {
              icon: <FaRegHeart size={28} />,
              title: "Crafted With Love",
              desc: "Our artisans craft each product with attention to detail, ensuring quality and uniqueness.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative bg-lightGreen rounded-lg w-5/6 text-start h-fit md:h-60 lg:h-60 pt-10 pb-3 px-5 flex flex-col gap-4"
            >
              <span className="text-xl font-semibold">{feature.title}</span>
              <p>{feature.desc}</p>
              <div className="absolute justify-center items-center flex bg-brightGreen rounded-lg h-14 w-12 left-9 -top-0 -translate-y-1/2">
                <span className="text-white ">{feature.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-18 text-center space-y-3 py-16 bg-lightGreen w-full">
        <h1 className="text-4xl font-bold">Shop By Category</h1>
        <span className="text-lg">
          Explore our wide range of sustainable products
        </span>
        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-y-4 lg:mx-12 my-10 place-items-center">
          {categories.map((category, index) => (
            <div
              onClick={() => category.action(navigate)}
              key={index}
              className="bg-white w-[160px] h-[160px] flex flex-col rounded-xl justify-center gap-1 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="text-3xl">{category.icon}</span>
              <span className="text-lg font-semibold">{category.name}</span>
              <span className="text-sm text-gray-500">
                {category.count} Products
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-lightGreen py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Featured Products</h1>
            <a
              href="/products"
              className="text-brightGreen hover:text-darkGreen font-medium"
            >
              <div className="flex items-center gap-1 font-semibold">
                View All <BsArrowRight size={18} />
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-1 duration-300 transition-transform"
              >
                <div className="w-full h-60 bg-gray-white rounded-t-lg overflow-hidden p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full oject-contain group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href="#">{product.name}</a>
                  </h3>

                  <div className="mt-2 flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-gray-900">
                        Rs.{product.price}
                      </span>
                    </div>
                    <button className="cursor-pointer px-3 py-1 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-darkGreen mt-15 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Our Customers Say
          </h2>

          <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="relative px-6 pt-8 pb-12 sm:px-12">
              <div className="absolute top-0 left-0 transform -translate-y-6 translate-x-6">
                <svg
                  className="h-12 w-12 text-brightGreen opacity-25"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <p className="relative text-xl text-gray-600">
                "I'm absolutely in love with my hemp kurta! It's not only
                stylish and comfortable but knowing it's also eco-friendly makes
                me feel good about my purchase. The quality is exceptional, and
                it gets softer with each wash."
              </p>

              <footer className="mt-8">
                <div className="flex items-center justify-center">
                  <div className="h-18 w-18 rounded-full border border-gray-300 overflow-hidden">
                    <img
                      src={defaultImage}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900 text-xl">
                      Ravi Sharma
                    </div>
                    <div className="text-sm text-gray-500">
                      Kathmandu, Nepal
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              #OrganicFiber
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Follow us on Instagram and share your sustainable style
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={defaultImage}
                alt=""
                className="w-full h-full object-center object-cover hover:opacity-75 transition-opacity"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={heroImage1}
                className="w-full h-full object-center object-cover hover:opacity-75 transition-opacity"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src=""
                className="w-full h-full object-center object-cover hover:opacity-75 transition-opacity"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src=""
                className="w-full h-full object-center object-cover hover:opacity-75 transition-opacity"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden sm:col-span-2 md:col-span-1">
              <img
                src=""
                className="w-full h-full object-center object-cover hover:opacity-75 transition-opacity"
              />
            </div>
          </div>

          <div className="mt-8 w-full flex justify-center">
            <a
              href="#"
              className="text-green-600 text-lg mx-auto hover:text-green-700 font-semibold "
            >
              <div className="flex gap-1 items-center">
                <span>View More on Instagram</span>
                <BsArrowRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
