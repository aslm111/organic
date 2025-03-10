import { TbWash, TbSunOff, TbBleachOff } from "react-icons/tb";
import { RiBrush3Line } from "react-icons/ri";
import { LuWashingMachine } from "react-icons/lu";

const ProductCare = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">Care Instructions</h2>
      <div className="bg-lightGreen rounded-lg grid grid-cols-1 md:grid-cols-2 p-4">
        <div>
          <h4 className="text-xl mb-3 font-semibold">Washing Guidelines</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-4">
              <LuWashingMachine className="text-darkGreen" />
              <span>Machine Washable</span>
            </li>
            <li className="flex items-center gap-4">
              <TbBleachOff className="text-darkGreen" />
              <span>Do Not Bleach</span>
            </li>
            <li className="flex items-center gap-4">
              <TbWash className="text-darkGreen" />
              <span>Cold Wash</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl mb-3 font-semibold">Additional Tips</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-4">
              <RiBrush3Line className="text-darkGreen" />
              <span>Use a soft brush to remove dirt before washing.</span>
            </li>
            <li className="flex items-center gap-4">
              <TbSunOff className="text-darkGreen" />
              <span>
                Avoid prolonged exposure to direct sunlight to maintain fabric
                strength.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCare;
