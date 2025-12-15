
import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ✅ Add new order
  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  // ✅ Delete order by id
  const deleteOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
