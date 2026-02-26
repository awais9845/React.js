const Navbar = () => {
  return (
    <div className="flex justify-around border h-13 items-center bg-[black]">
      <div className="text-3xl text-white">Ecommerece</div>
      <div>
        <ul className="flex gap-4 text-[18px] text-white">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <input
          className="border p-1 rounded-2xl text-black bg-white"
          placeholder="Search Bar"
          type="search"
          name=""
          id=""
        />
        <div className="border p-0.[3px] pl-5 pr-5  bg-[green] text-white font-bold">
          products
        </div>
      </div>
    </div>
  );
};

export default Navbar;
