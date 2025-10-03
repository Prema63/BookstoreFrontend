// import React, { useContext } from "react";
// import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
// import { CartContext } from "./CartContext";

// export default function Cart() {
//   const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const shipping = subtotal > 50 ? 0 : 5.99;
//   const total = subtotal + shipping;

//   return (
//     <div className="min-h-screen p-6 bg-gray-50">
//       <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

//       {cart?.length === 0 ? (
//         <div className="text-center py-20">
//           <ShoppingCart className="w-16 h-16 mx-auto text-gray-300" />
//           <p className="text-gray-500 mt-4">Your cart is empty</p>
//         </div>
//       ) : (
//         <div className="grid lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2 space-y-4">
//             {cart?.map((item) => (
//               <div
//                 key={item?.id}
//                 className="bg-white p-4 rounded-lg shadow flex gap-4"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-24 h-36 object-cover rounded"
//                 />
//                 <div className="flex-1 flex flex-col justify-between">
//                   <div>
//                     <h3 className="font-semibold">{item.title}</h3>
//                     <p className="text-gray-600">{item.author}</p>
//                     <p className="font-bold text-amber-600">{item.price}</p>
//                   </div>
//                   <div className="flex items-center justify-between mt-2">
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => updateQuantity(item.id, -1)}
//                         className="px-2 py-1 bg-gray-200 rounded"
//                       >
//                         <Minus className="w-3 h-3" />
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.id, 1)}
//                         className="px-2 py-1 bg-blue-700 text-white rounded"
//                       >
//                         <Plus className="w-3 h-3" />
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-500 flex items-center gap-1"
//                     >
//                       <Trash2 className="w-4 h-4" /> Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Order Summary</h3>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal ({totalItems} items)</span>
//               <span>₹{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Shipping</span>
//               <span>{shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}</span>
//             </div>
//             <div className="border-t pt-3 flex justify-between font-bold text-lg">
//               <span>Total</span>
//               <span>₹{total.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



















import React, { useContext } from "react";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const parsePrice = (price) =>
    parseFloat(String(price).replace("$", "")) || 0;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart?.length === 0 ? (
        <div className="text-center py-20">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-300" />
          <p className="text-gray-500 mt-4">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cart?.map((item) => (
              <div
                key={item?.id}
                className="bg-white p-4 rounded-lg shadow flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-36 object-cover rounded"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.author}</p>
                    {/* ✅ Remove $ and show ₹ */}
                    <p className="font-bold text-amber-600">
                      ₹{parsePrice(item.price).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 bg-blue-700 text-white rounded"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal ({totalItems} items)</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

