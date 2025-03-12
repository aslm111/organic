import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

const CartItem = ({ item, onRemove, onUpdateQuantity, onToggleSelect }) => {
  const { name, size, color, price, quantity, inStock, image, selected } = item;

  const formattedPrice = `Rs.${price}`;

  return (
    <div className="border-b  border-gray-300 p-4 flex items-start">
      <div className="flex items-center h-full mr-3">
        <button
          onClick={onToggleSelect}
          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
            selected ? "border-darkGreen" : "border-gray-300"
          }`}
        >
          {selected && (
            <div className="w-3 h-3 rounded-full bg-darkGreen"></div>
          )}
        </button>
      </div>

      <div className="w-26 h-28 bg-gray-300 flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-gray-800">{name}</h3>
            <div className="text-sm text-gray-500 mt-1">
              <p>Size: {size}</p>
              <p>Color: {color}</p>
              <p className="font-medium text-gray-700 mt-1">
                Price: <span className="text-amber-600">{formattedPrice}</span>
              </p>
              <p className="text-darkGreen text-xs mt-1 flex items-center">
                {inStock ? (
                  <>
                    In Stock
                    <span className="inline-block w-2 h-2 bg-darkGreen rounded-full ml-1"></span>
                  </>
                ) : (
                  "Out of Stock"
                )}
              </p>
            </div>
          </div>

          <button
            onClick={onRemove}
            className="text-red-500 hover:scale-110 transition ease-in-out"
            aria-label="Remove item"
          >
            <FiTrash2 size={20} />
          </button>
        </div>

        <div className="flex justify-end mt-4">
          <div className="flex items-center border rounded-full">
            <button
              className="px-2 py-1 text-gray-500 hover:text-gray-700"
              onClick={() => onUpdateQuantity(quantity - 1)}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <FiMinus size={16} />
            </button>

            <span className="px-3 py-1">{quantity}</span>

            <button
              className="px-2 py-1 text-gray-500 hover:text-gray-700"
              onClick={() => onUpdateQuantity(quantity + 1)}
              aria-label="Increase quantity"
            >
              <FiPlus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
