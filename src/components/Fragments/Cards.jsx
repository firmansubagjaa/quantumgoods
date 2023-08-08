export default function Cards({ title, desc, className, image, category }) {
  return (
    <div className={`card rounded-lg card-compact w-60 bg-base-100 shadow-md ${className}`}>
      <figure>
        <img src={image} alt={title} className="object-cover object-center w-full h-64 " />
      </figure>
      <div className="card-body">
        <div className="h-28">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>

        <div className="card-actions justify-end">
          <div className="badge badge-outline w-28">{category}</div>
          <div className="badge badge-outline">Products</div>
          <button className="btn btn-primary w-full rounded-2xl">Detail</button>
        </div>
      </div>
    </div>
  );
}
