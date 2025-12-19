

// import React, { useContext } from "react";
// import { OrderContext } from "../Context/OrderContext";
// import { UserContext } from "../Context/UserContext";

// const Orders = () => {
//   const { orders, deleteOrder } = useContext(OrderContext);
//   const { user } = useContext(UserContext);

//   if (!user) {
//     return (
//       <h2 className="text-center mt-20 text-lg font-semibold text-gray-500">
//         Please login to view your orders
//       </h2>
//     );
//   }

//   const userOrders = user.isAdmin
//     ? orders
//     : orders.filter((order) => order.userId === user.id);

//   if (userOrders.length === 0) {
//     return (
//       <h2 className="text-center mt-20 text-lg font-semibold text-gray-500">
//         No Orders Found
//       </h2>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto mt-10 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-cyan-950">
//         {user.isAdmin ? "All Orders" : "My Orders"}
//       </h2>

//       {userOrders.map((order) => {
//         const totalItems = order.items.reduce(
//           (sum, item) => sum + item.quantity,
//           0
//         );

//         return (
//           <div
//             key={order.id}
//             className="mb-10 bg-white rounded-xl shadow-md border border-gray-200"
//           >
//             {/* ORDER HEADER */}
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-5 bg-cyan-950 text-amber-50 text-sm font-semibold rounded-t-xl">
//               <div>
//                 <p className="text-xs text-amber-300">ORDER ID</p>
//                 <p>{order.id}</p>
//               </div>

//               <div>
//                 <p className="text-xs text-amber-300">TOTAL</p>
//                 <p>₹{order.total}</p>
//               </div>

//               <div>
//                 <p className="text-xs text-amber-300">ITEMS</p>
//                 <p>{totalItems}</p>
//               </div>

//               <div>
//                 <p className="text-xs text-amber-300">PAYMENT</p>
//                 <p>{order.payment}</p>
//               </div>

//               <div>
//                 <p className="text-xs text-amber-300">DATE</p>
//                 <p>{new Date(order.date).toLocaleDateString()}</p>
//               </div>
//             </div>

//             {/* ADMIN DELETE */}
//             {user.isAdmin && (
//               <div className="flex justify-end px-5 pt-4">
//                 <button
//                   onClick={() => deleteOrder(order.id)}
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm transition"
//                 >
//                   Delete Order
//                 </button>
//               </div>
//             )}

//             {/* ITEMS */}
//             <div className="divide-y">
//               {order.items.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-4"
//                 >
//                   <div>
//                     <h4 className="font-semibold text-gray-800">
//                       {item.title}
//                     </h4>
//                     <p className="text-sm text-gray-500">
//                       Price: ₹{item.price}
//                     </p>
//                   </div>

//                   <div className="flex gap-6 text-sm font-semibold text-gray-700">
//                     <span>Qty: {item.quantity}</span>
//                     <span className="text-gray-900">
//                       ₹{item.price * item.quantity}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>

         
//             <div className="bg-gray-50 px-5 py-4 flex justify-between items-center font-semibold text-cyan-950 rounded-b-xl">
//               <span>Total Payable</span>
//               <span className="text-lg text-amber-600">
//                 ₹{order.total}
//               </span>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Orders;

import React, { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { UserContext } from "../Context/UserContext";

const Orders = () => {
  const { orders, deleteOrder, updateOrderStatus } = useContext(OrderContext);
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <h2 className="text-center mt-20 text-lg font-semibold text-gray-500">
        Please login to view your orders
      </h2>
    );
  }

  const userOrders = user.isAdmin
    ? orders
    : orders.filter(order => order.userId === user.id);

  if (userOrders.length === 0) {
    return (
      <h2 className="text-center mt-20 text-lg font-semibold text-gray-500">
        No Orders Found
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-cyan-950">
        {user.isAdmin ? "All Orders" : "My Orders"}
      </h2>

      {userOrders.map(order => {
        const totalItems = order.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        return (
          <div
            key={order.id}
            className="mb-10 bg-white rounded-xl shadow-md border border-gray-200"
          >
            {/* HEADER */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-5 bg-cyan-950 text-amber-50 text-sm font-semibold rounded-t-xl">
              <div>
                <p className="text-xs text-amber-300">ORDER ID</p>
                <p>{order.id}</p>
              </div>

              <div>
                <p className="text-xs text-amber-300">TOTAL</p>
                <p>₹{order.total}</p>
              </div>

              <div>
                <p className="text-xs text-amber-300">ITEMS</p>
                <p>{totalItems}</p>
              </div>

              <div>
                <p className="text-xs text-amber-300">PAYMENT</p>
                <p>{order.payment}</p>
              </div>

              <div>
                <p className="text-xs text-amber-300">DATE</p>
                <p>{new Date(order.date).toLocaleDateString()}</p>
              </div>

              <div>
                <p className="text-xs text-amber-300">STATUS</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      order.status === "Delivered"
                        ? "bg-green-200 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-amber-200 text-amber-800"
                    }`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            {/* ADMIN CONTROLS */}
            {user.isAdmin && (
              <div className="flex flex-wrap items-center gap-4 px-5 pt-4">
                <select
                  value={order.status}
                  onChange={(e) =>
                    updateOrderStatus(order.id, e.target.value)
                  }
                  className="border border-gray-300 px-3 py-2 rounded-md text-sm"
                >
                  <option value="Placed">Placed</option>
                  <option value="Packed">Packed</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>

                <button
                  onClick={() => deleteOrder(order.id)}
                  className="ml-auto bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm"
                >
                  Delete Order
                </button>
              </div>
            )}

            {/* ITEMS */}
            <div className="divide-y">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between p-5"
                >
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500">
                      Price: ₹{item.price}
                    </p>
                  </div>

                  <div className="text-sm font-semibold">
                    Qty: {item.quantity} — ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 px-5 py-4 flex justify-between font-semibold text-cyan-950 rounded-b-xl">
              <span>Total Payable</span>
              <span className="text-amber-600 text-lg">
                ₹{order.total}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
