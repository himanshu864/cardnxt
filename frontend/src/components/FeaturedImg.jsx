const FeaturedImages = ({ images }) => {
  return (
    <div className="m-5 flex flex-wrap gap-5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Feature Image ${index + 1}`}
          className="h-1/5 w-1/5 rounded-lg"
        />
      ))}
    </div>
  );
};

export default FeaturedImages;
