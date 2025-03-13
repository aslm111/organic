const ProductGallery = ({
  images,
  selectedImage,
  setSelectedImage,
  productName,
}) => {
  return (
    <div>
      <div className="border border-darkGreen rounded-md overflow-hidden mb-4 flex items-center justify-center bg-white h-[400px]">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`border rounded-md ${
              selectedImage === index ? "border-brightGreen" : "border-gray-300"
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="object-cover w-full h-30"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
