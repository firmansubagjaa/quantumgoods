export default function Thumbnail({ image, alt }) {
  return (
    <div className="w-64 carousel rounded-box">
      <div className="carousel-item w-full">
        <img src={image} className="w-full" alt={alt} />
      </div>
    </div>
  );
}
