// import { createContext, useEffect, useState } from "react";

// export const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState(
//     JSON.parse(localStorage.getItem("orders")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders));
//   }, [orders]);

//   const addOrder = (order) => {
//     setOrders([...orders, order]);
//   };


//   const deleteOrder = (id) => {
//     setOrders(orders.filter((order) => order.id !== id));
//   };

//   return (
//     <OrderContext.Provider value={{ orders, addOrder, deleteOrder }}>
//       {children}
//     </OrderContext.Provider>
//   );
// };
import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ✅ Add order with default status
  const addOrder = (order) => {
    setOrders([...orders, { ...order, status: "Placed" }]);
  };

  // ✅ Admin update order status
  const updateOrderStatus = (id, status) => {
    setOrders(
      orders.map(order =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, deleteOrder, updateOrderStatus }}
    >
      {children}
    </OrderContext.Provider>
  );
};
