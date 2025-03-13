import React, { useState } from "react";
import {
  FiChevronLeft,
  FiTrash2,
  FiMinus,
  FiPlus,
  FiChevronRight,
  FiTag,
} from "react-icons/fi";
import CartItem from "../components/CartItem";
import hempshortsleeve from "../assets/cart-images/hempshirt.png";
import hempshortsleeve2 from "../assets/cart-images/hempshirt2.png";
import hemplongsleeve from "../assets/cart-images/hempshirtlong.png";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Hemp Short Sleeve Tee",
      size: "Large",
      color: "Navy",
      price: 1999,
      quantity: 1,
      inStock: true,
      image: hempshortsleeve,
      selected: true,
    },
    {
      id: 2,
      name: "Hemp Short Sleeve Tee",
      size: "Small",
      color: "Apricot",
      price: 1999,
      quantity: 3,
      inStock: true,
      image: hempshortsleeve2,
      selected: true,
    },
    {
      id: 3,
      name: "Hemp Long Sleeve Tee",
      size: "Medium",
      color: "Navy",
      price: 2499,
      quantity: 2,
      inStock: true,
      image: hemplongsleeve,
      selected: true,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const toggleItemSelection = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handlePromoCodeSubmit = (e) => {
    e.preventDefault();
  };

  const selectedItems = cartItems.filter((item) => item.selected);


  const subtotal = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.35; 
  const deliveryFee = subtotal > 0 ? 200 : 0; 
  const total = subtotal - discount + deliveryFee;


  const formatCurrency = (amount) =>
    `Rs.${amount.toLocaleString("en-IN", {
      minimumFractionDigits: amount % 1 === 0 ? 0 : 1,
      maximumFractionDigits: 1,
    })}`;

  return (
    <div className="mx-10 px-4 py-8 max-w-8xl">
     
      <div className="flex items-center text-gray-500 text-sm">
        <span className="hover:text-brightGreen cursor-pointer">Home</span>
        <FiChevronRight className="mx-2" />
        <span className="font-medium">Cart</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 my-6">YOUR CART</h1>

      <div className="flex flex-col  lg:flex-row gap-20">
        <div className="lg:w-2/3">
          {/* cart items */}
          <div className="bg-amber-50 border-orange-200 border rounded-lg  overflow-hidden">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={() => removeItem(item.id)}
                  onUpdateQuantity={(newQty) => updateQuantity(item.id, newQty)}
                  onToggleSelect={() => toggleItemSelection(item.id)}
                />
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                Your cart is empty
              </div>
            )}
          </div>

          <button
            className="flex items-center text-gray-700 font-medium mt-6 hover:text-green-700 transition-colors"
            onClick={() => console.log("Continue shopping")}
          >
            <FiChevronLeft className="mr-2" />
            Continue Shopping
          </button>
        </div>

        <div className="lg:w-1/3">
          {/*order summary */}
          <div className="bg-amber-50 border border-orange-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            {selectedItems.length > 0 ? (
              <>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between text-red-500">
                    <span>Discount (-35%)</span>
                    <span>{formatCurrency(discount)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">
                      {formatCurrency(deliveryFee)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>

                <form onSubmit={handlePromoCodeSubmit} className="mb-6">
                  <div className="flex border-gray-900 bg-white border rounded-full">
                    <div className="relative flex-grow">
                      <FiTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Add promo code"
                        className="w-full rounded-full bg-white my-1  py-2 pl-10 pr-3 focus:outline-none focus:ring-0"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-green-800 text-white px-4 py-2 my-1 mr-1 rounded-full hover:bg-green-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </form>

                <button
                  className="w-full bg-green-800 text-white py-3 rounded-md flex items-center justify-center font-medium hover:bg-green-700 transition-colors"
                  onClick={() => console.log("Proceeding to checkout")}
                >
                  Go to Checkout <span className="ml-2">→</span>
                </button>
              </>
            ) : (
              <div className="text-center text-gray-500 my-6">
                No items selected
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
