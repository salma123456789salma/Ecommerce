import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoryCard from '../CategoryCard/CategoryCard';
import Loader from '../Loader/Loader';

export default function Categories() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
      return response.data;
    }
  });

  if (isLoading) return <Loader />;
  if (isError) return <div className="text-red-500 text-center">Error: {error.message}</div>;

  const categories = data?.data || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Categories</h1>
      <div className="flex flex-wrap -mx-3">
        {categories.map(category => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}