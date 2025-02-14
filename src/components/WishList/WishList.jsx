import { useContext } from "react";
import { WishListContext } from "../../contexts/WishListContext";
import ProductCard from "../ProductCard/ProductCard";

export default function WishList() {
  const { wishList } = useContext(WishListContext);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center my-5">My Wish List</h2>
      {wishList.length === 0 ? (
        <p className="text-center text-gray-500">No items in your wish list.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {wishList.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}