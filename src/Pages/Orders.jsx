
import React, { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { UserContext } from "../Context/UserContext";

const Orders = () => {
  const { orders, deleteOrder } = useContext(OrderContext); // deleteOrder function
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2 className="text-center mt-10">Please login to view your orders</h2>;
  }

  // Admin sees all orders, normal user sees only theirs
  const userOrders = user.isAdmin
    ? orders
    : orders.filter(order => order.userId === user.id);

  if (userOrders.length === 0) {
    return <h2 className="text-center mt-10">No Orders Found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {user.isAdmin ? "All Orders" : "My Orders"}
      </h2>

      {userOrders.map((order) => {
        const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0); // total items

        return (
          <div key={order.id} className="mb-8 border rounded shadow">
            
            {/* HEADER */}
            <div className="flex justify-between bg-gray-200 p-4 font-semibold items-center flex-wrap">
              <span>Order ID: {order.id}</span>
              <span>Total: ₹{order.total}</span>
              <span>Items: {totalItems}</span> {/* total items */}
              <span>Payment: {order.payment}</span>
              <span>Date: {new Date(order.date).toLocaleDateString()}</span> {/* purchase date */}

              {/* Admin delete button */}
              {user.isAdmin && (
                <button
                  onClick={() => deleteOrder(order.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              )}
            </div>

            {/* ITEMS TABLE */}
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, index) => (
                  <tr key={index} className="text-center border-b">
                    <td className="p-3">{item.title}</td>
                    <td className="p-3">₹{item.price}</td>
                    <td className="p-3">{item.quantity}</td>
                    <td className="p-3 font-semibold">₹{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
