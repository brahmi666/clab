import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopInterior from "./ShopInterior";
import { ArrowLeft, Loader2 } from "lucide-react";
import Model from "./Model";

const Model1 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 relative">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Go Back
      </button>

      <h1 className="text-white text-3xl font-bold mb-6">
        Shop Interior Model
      </h1>
      <p className="text-white bg-green-500 m-3 p-2 border border-dashed  border-blue-800 rounded-lg font-bold">
        DEMO
      </p>

      {/* 3D Model Container */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-full max-w-4xl flex justify-center relative">
        {/* Loading Indicator */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 rounded-xl">
            <Loader2 className="w-12 h-12 text-white animate-spin mb-3" />
            <p className="text-white text-lg">Loading Model...</p>
          </div>
        )}

        {/* Model Component */}
        <Model onLoad={() => setLoading(false)} />
      </div>
    </div>
  );
};

export default Model1;
 