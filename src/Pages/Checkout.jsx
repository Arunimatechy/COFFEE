import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { OrderContext } from "../Context/OrderContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { Cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const { user } = useContext(UserContext); // get logged-in user
  const navigate = useNavigate();

  const total = Cart.reduce((a, b) => a + b.price * b.quantity, 0);

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phonenumber: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.address ||
      !form.city ||
      !form.state ||
      !form.pincode ||
      !form.phonenumber ||
      !form.payment
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!user) {
      alert("Please login to place an order");
      return;
    }

    if (Cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const order = {
      id: Date.now(),
      userId: user.id,        // store user id
      username: user.username, // store username
      items: Cart,
      total,
      payment: form.payment,
      ...form,
      date: new Date().toISOString()
    };

    addOrder(order);
    clearCart();
    navigate("/success");
  };

  return (
    <form
      onSubmit={placeOrder}
      className="max-w-xl mx-auto p-5 mt-10 shadow rounded"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <input
        type="text"
        name="state"
        placeholder="State"
        value={form.state}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <input
        type="number"
        name="phonenumber"
        placeholder="Phone Number"
        value={form.phonenumber}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={form.pincode}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      {/* Payment Options */}
      <div className="mb-3">
        <h3 className="font-semibold mb-1">Payment Method</h3>
        <label className="mr-4">
          <input
            type="radio"
            name="payment"
            value="COD"
            checked={form.payment === "COD"}
            onChange={handleChange}
            className="mr-1"
          />
          Cash on Delivery
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={form.payment === "UPI"}
            onChange={handleChange}
            className="mr-1"
          />
          UPI
        </label>
      </div>

      <h3 className="font-bold mb-3">Total: ₹{total}</h3>

      <button
        type="submit"
        className="bg-green-600 text-white w-full p-3 rounded hover:bg-green-700 transition"
      >
        PLACE ORDER
      </button>
    </form>
  );
};

export default Checkout;
