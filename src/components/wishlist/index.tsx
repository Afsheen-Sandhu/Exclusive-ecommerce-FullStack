"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/redux/store";
import { removeFromWishlist } from "@/lib/redux/slices/WishlistSlices";
import { addToCart } from "@/lib/redux/slices/CartSlice"; // ✅ import addToCart
import { CartItem } from "@/lib/redux/CartItem";
import { Button } from "../ui/buttons";

export const Wishlist = () => {
  const dispatch: AppDispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const handleAddToCart = (item: any) => {
    const cartItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty 💔</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border-transparent rounded-lg p-4 shadow-md flex flex-col items-center"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 object-contain mb-4"
                />
              )}
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>

              <div className="flex gap-3 mt-4">
                {/* ✅ Add to Cart button */}
                <Button
                variant={"solid"}
                  className="bg-primary text-white px-4 py-2  hover:bg-blue-600"
                  onClick={() => handleAddToCart(item)}
                    label="Add to Cart"
                />
                  
          

                {/* Remove button */}
                <Button
                variant={"solid"}
                  className="bg-warning text-white px-4 py-2  hover:bg-yellow-600"
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  label="Remove"
                />
                 
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
