import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-[black] text-white h-20">
      <div>Ecommerece</div>
      <div className="">
        <ul className="flex gap-7">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-white text-black p-2 rounded-lg">
          Your Products
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
