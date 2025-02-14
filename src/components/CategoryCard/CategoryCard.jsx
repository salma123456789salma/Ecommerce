import { Link } from 'react-router-dom';

export default function BrandCard({ category: brand }) {
  const { _id, name, image } = brand;
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
      <Link
        to={`/category/${_id}`}
        className="block bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
      >
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={brand.image}
          alt={brand.name}
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold text-gray-900">{name}</h5>
        </div>
      </Link>
    </div>
  );
}