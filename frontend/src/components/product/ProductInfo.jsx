import { FaStar, FaRegStar, FaShoppingCart, FaRegHeart } from "react-icons/fa";

const ProductInfo = ({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
}) => {
  
  
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };


  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.availableQuantity) {
      setQuantity(value);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">{product.name}</h1>
      <div className="flex justify-between text-center">
        <div className="flex items-center mb-4">
          <div className="flex mr-2">{renderRatingStars(product.rating)}</div>
          <span className="text-gray-700">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        <FaRegHeart className="text-xl" />
      </div>

      {/*  price*/}
      <div className="flex items-center mb-4">
        <span className="text-3xl text-darkGreen font-bold mr-2">
          Rs.{product.price}
        </span>
        <span className="text-gray-500 line-through mr-2">
          Rs.{product.originalPrice}
        </span>
        <span className="text-brightGreen">{product.discount}</span>
      </div>
      <p className="text-sm text-gray-600 mb-6">Inclusive of all taxes</p>


      <div className="mb-6 w-1/2">
        <h2 className="font-medium mb-2">Size</h2>
        <div className="grid grid-cols-4 gap-2">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(index)}
              className={`py-2 border rounded-md ${
                selectedSize === index
                  ? "border-brightGreen bg-lightGreen"
                  : "border-grey bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* colors */}
      <div className="mb-6 w-1/2">
        <h2 className="font-medium mb-2">Color</h2>
        <div className="grid grid-cols-2 gap-2">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`py-2 border rounded-md  ${
                selectedColor === index
                  ? "border-brightGreen bg-lightGreen"
                  : "border-grey bg-gray-100"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
{/* quantity */}
      <div className="mb-6">
        <h2 className="font-medium mb-2">Quantity</h2>
        <div className="flex items-center">
          <input
            type="number"
            min="1"
            max={product.availableQuantity}
            value={quantity}
            onChange={handleQuantityChange}
            className="w-24 border border-gray-300 rounded-md p-2 mr-4"
          />
          <span className="text-gray-600">
            {product.availableQuantity} available
          </span>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="bg-brightGreen hover:bg-darkGreen text-white py-3 px-4 rounded-md flex items-center justify-center">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
        <button className="border border-darkGreen hover:border-brightGreen text-darkGreen py-3 px-4 rounded-md">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
