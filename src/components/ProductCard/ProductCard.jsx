import { useContext } from "react";
import { WishListContext } from "../../contexts/WishListContext";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  let { title, category, _id, price, ratingsAverage, imageCover } = product;
  let { addToCart } = useContext(CartContext);
  let { wishList, toggleWishList } = useContext(WishListContext);

  const isLiked = wishList.some(item => item._id === _id);

  async function addProductToCart(id) {
    let data = await addToCart(id);
    if (data?.status == "success") {
      toast.success("Successfully added to cart!", {
        position: "top-center",
      });
    } else {
      toast.error("Fail to add to cart!");
    }
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3 m-auto">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm relative">
        <Link to={`/productdetails/${_id}/${category._id}`}>
          <img className="p-3 rounded-t-lg" src={imageCover} alt="product image" />
          <div className="px-5 pb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
              {category.name}
            </span>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-1">
              {title}
            </h5>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                {ratingsAverage}
              </span>
            </div>
          </div>
        </Link>

        <button
          onClick={() => toggleWishList(product)}
          className="absolute top-3 right-3 text-2xl"
        >
          <i className={`fa-heart ${isLiked ? "fas text-red-500" : "far text-gray-500"}`}></i>
        </button>

        <div className="flex items-center justify-between px-3 pb-3">
          <span className="text-xl font-bold text-gray-900">{price} EGP</span>
          <span
            onClick={() => addProductToCart(_id)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </span>
        </div>
      </div>
    </div>
  );
}