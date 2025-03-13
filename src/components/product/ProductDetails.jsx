import { MdWaterDrop } from "react-icons/md";
import { FaTshirt, FaLeaf } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <>
            <div className="border p-4 rounded-lg border-grey">
        <div className="mb-8">
          <h1 className="font-bold text-2xl">About This Item</h1>
          <p className="mt-5">
            Premium handcrafted hemp kurta with traditional design elements.
            Comfortable, breathable and perfect for casual and semi-formal
            occasions.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Features</h1>
          <ul className="space-y-2 mt-5">
            <li className="flex items-center gap-4">
              <MdWaterDrop className="text-brightGreen" />
              <span>Natural antimicrobial properties</span>
            </li>
            <li className="flex items-center gap-4">
              <FaTshirt className="text-brightGreen" />
              <span>Gets softer with wash</span>
            </li>
            <li className="flex items-center gap-4">
              <FaLeaf className="text-brightGreen" />
              <span>UV resistant</span>
            </li>
          </ul>
        </div>
      </div>

      {/* product specifications */}
      <div className="bg-darkGreen rounded-lg p-4 text-white">
        <div>
          <h3 className="w-full text-2xl text-left pl-4 font-bold">
            Product Details
          </h3>

          <div className="grid grid-cols-2 px-4 pt-4 gap-2">
            <span>Material</span>
            <div className="text-right">100% Organic Hemp</div>
            <span>Weight</span>
            <div className="text-right">250g</div>
            <span>Size</span>
            <div className="text-right">38</div>
            <span>Item Id</span>
            <div className="text-right">RT-89</div>
          </div>
        </div>

        <div className="h-[1px] bg-grey my-5"></div>

        <div>
          <h3 className="w-full text-2xl text-left pl-4 font-bold">
            Packaging
          </h3>

          <div className="grid grid-cols-2 p-4 gap-2">
            <span>Dimensions</span>
            <div className="text-right">30cm*25cm*5cmp</div>
            <span>Weight</span>
            <div className="text-right">300g</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
