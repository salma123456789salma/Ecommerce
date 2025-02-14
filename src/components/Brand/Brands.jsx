import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import BrandCard from '../BrandCard/BrandCard';
import Loader from '../Loader/Loader';

export default function Brands() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
      return response.data;
    }
  });

  if (isLoading) return <Loader />;
  if (isError) return <div className="text-red-500 text-center">Error: {error.message}</div>;

  const brands = data?.data || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Brands</h1>
      <div className="flex flex-wrap -mx-3">
        {brands.map(brand => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
}