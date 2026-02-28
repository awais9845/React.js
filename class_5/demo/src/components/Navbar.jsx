import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-black text-white h-15 items-center w-full ">
      <div>Ecommerce</div>
      <div>
        <ul className="flex gap-7">
          <li>Home</li>
          <li>About</li>
          <li>Help</li>
        </ul>
      </div>
      <div>
        <button>Products</button>
      </div>
    </div>
  );
};

export default Navbar;
