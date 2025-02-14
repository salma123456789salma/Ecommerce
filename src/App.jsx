import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout.jsx';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import 'flowbite';
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserContextProvider from './contexts/UserContext';
import WishListContextProvider from './contexts/WishListContext';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Categories from './components/Category/Categories.jsx';
import Brands from './components/Brand/Brands.jsx';
import WishList from './components/WishList/WishList';
import CartContextProvider from './contexts/CartContext';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <ProtectRoute><Home /></ProtectRoute> },
      { path: "products", element: <ProtectRoute><Product /></ProtectRoute> },
      { path: "categories", element: <ProtectRoute><Categories /></ProtectRoute> }, // إضافة مسار الفئات
      { path: "brands", element: <ProtectRoute><Brands /></ProtectRoute> }, // إضافة مسار الفئات
      { path: "productdetails/:id/:category", element: <ProtectRoute><ProductDetails /></ProtectRoute> },
      { path: "cart", element: <ProtectRoute><Cart /></ProtectRoute> },
      { path: "wishlist", element: <ProtectRoute><WishList /></ProtectRoute> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Notfound /> },
    ]
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <UserContextProvider>
          <WishListContextProvider>
          <RouterProvider router={router} />
          <Toaster />
          </WishListContextProvider>
        </UserContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default App;