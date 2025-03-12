import React, { useState } from "react";
import { SiVisa } from "react-icons/si";

const Checkout = () => {
  const [saveShipping, setSaveShipping] = useState(false);
  const [saveShippingAsBilling, setSaveShippingAsBilling] = useState(false);

  const InputComponent = ({ label, placeholder, type }) => {
    return (
      <div className="w-80">
        <label className="block text-sm mb-1 ">
          {label} <span className="text-red-500">*</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border bg-white border-gray-300 focus:outline-brightGreen  rounded-xl px-3 py-1"
        />
      </div>
    );
  };

  return (
    <div className="w-100vw px-24 mt-4">
      <div className="flex items-center gap-2 text-sm mb-4">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>
        <span>&gt;</span>
        <a href="#" className="text-blue-500 hover:underline">
          Cart
        </a>
        <span>&gt;</span>
        <span>Checkout</span>
      </div>

      <h1 className="text-2xl font-medium mb-3 text-darkGreen">Checkout</h1>

      <div className=" bg-lightGreen border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">Shipping Information</h2>

        <div className="grid grid-cols-3 gap-4 gap-x-16">
          <InputComponent
            label="SHIP TO NAME"
            type="text"
            placeholder="John Wills"
          />
          <InputComponent
            label="ADDRESS"
            type="text"
            placeholder="Kalanki, near Sara mart"
          />

          <div></div>
          <InputComponent label="City" type="text" placeholder="Kathmandu" />

          <div className="w-80">
            <label className="block text-sm mb-1">
              STATE/PROVINCE <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-xl px-3 py-1  focus:outline-brightGreen appearance-none bg-white">
                <option>Select Province</option>
                <option>Koshi</option>
                <option>Madhesh</option>
                <option>Bagmati</option>
                <option>Gandaki</option>
                <option>Lumbini</option>
                <option>Karnali</option>
                <option>Supurpaschim</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div></div>
          <div className="w-80">
            <label className="block text-sm mb-1">
              COUNTRY <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full border border-gray-300 focus:outline-brightGreen rounded-xl px-3 py-1 appearance-none bg-white">
                <option>NEPAL</option>
                <option>India</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex group items-center px-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <InputComponent
            label="PHONE NUMBER"
            type="number"
            placeholder="98**********"
          />
          <InputComponent
            label="EMAIL "
            type="email"
            placeholder="hemp123@gmail.com"
          />
        </div>

        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              checked={saveShipping}
              onChange={() => setSaveShipping(!saveShipping)}
            />
            <span className="ml-2 text-sm">Save Shipping Address</span>
          </label>
        </div>
      </div>

      <div className="bg-lightGreen border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">Payment Information</h2>

        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-2 w-80">
            <label className="block text-sm mb-1">
              PAYMENT METHOD <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full border focus:outline-brightGreen border-gray-300 px-3 py-1 rounded-xl appearance-none bg-white">
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Esewa</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-2 w-80">
            <label className="block text-sm mb-1">
              CARD TYPE <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-xl px-3 py-1 focus:outline-brightGreen appearance-none bg-white">
                <option>American Express</option>
                <option>Visa</option>
                <option>Mastercard</option>
                <option>Discover</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-2 w-80">
            <label className="block text-sm mb-1">
              CARD NUMBER <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="XXXX XXXX XXXX XXXX"
                className="w-full border bg-white border-gray-300 rounded-xl px-3 py-1 outline-brightGreen"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <SiVisa size={40} />
              </div>
            </div>
          </div>

          <div className="col-span-2 w-80">
            <label className="block text-sm mb-1">
              EXPIRATION DATE <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <select className="w-full border  border-gray-300 focus:outline-brightGreen rounded-xl px-3 py-1 appearance-none bg-white">
                  <option>MM</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative flex-1">
                <select className="w-full border border-gray-300 focus:outline-brightGreen rounded-xl px-3 py-1 appearance-none bg-white">
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 w-80">
            <label className="block text-sm mb-1">
              CV CODE <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="XXX"
              className="w-full border bg-white border-gray-300 focus:outline-brightGreen rounded-xl px-3 py-1"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">
          Billing Information{" "}
          <span className="text-sm font-normal text-gray-500">
            as Appears on your Credit/Debit Card Statement
          </span>
        </h2>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-green-600 focus:ring-green-500"
            checked={saveShippingAsBilling}
            onChange={() => setSaveShippingAsBilling(!saveShippingAsBilling)}
          />
          <span className="ml-2 text-sm">Same Shipping Address</span>
        </label>
      </div>

      <div className="flex gap-4 justify-between">
        <div>
          <button className="bg-darkGreen text-white px-4 py-2 rounded hover:bg-green-900 transition">
            EDIT SHOPPING CART
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2 hover:bg-gray-400 transition">
            CANCEL ORDER
          </button>
        </div>
        <button className="bg-darkGreen text-white px-6 py-2 rounded hover:bg-green-900 transition">
          SUBMIT ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
