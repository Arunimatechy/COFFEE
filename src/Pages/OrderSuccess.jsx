

import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-green-600">
        Order Placed Successfully 🎉
      </h1>

      <Link
        to="/orders"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded"
      >
        View Order History
      </Link>
    </div>
  );
};

export default OrderSuccess;
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";

// const OrderSuccess = () => {
//   return (
//     <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white shadow-md rounded-xl p-8 text-center max-w-md w-full">
//         <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

//         <h1 className="text-2xl font-bold text-cyan-950 mb-2">
//           Order Placed Successfully!
//         </h1>

//         <p className="text-gray-500 text-sm mb-6">
//           Your order has been placed and is being processed.
//         </p>

//         <Link
//           to="/orders"
//           className="block bg-cyan-950 hover:bg-cyan-900 text-amber-50 py-3 rounded-lg font-semibold transition"
//         >
//           View My Orders
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccess;
