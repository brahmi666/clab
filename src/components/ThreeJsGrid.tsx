import React from "react";
import Model from "./Model";
import ShopInterior from "./ShopInterior";
import ArchComponent from "./ArchComponent";

const ThreeJsGrid = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1  gap-8">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex justify-center">
          <ShopInterior />
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex justify-center">
          <Model />
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex justify-center">
          <ArchComponent />
        </div>
      </div>
    </div>
  );
};

export default ThreeJsGrid;
