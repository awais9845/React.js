import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [finalOutput, setFinalOutput] = useState(search);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleFind = () => {
    setFinalOutput(search);
  };
  return (
    <div className="border flex flex-col p-3 gap-2.5 bg-[gray] text-black w-75 rounded-2xl m-auto mt-5">
      <div className=" flex flex-col gap-3 justify-center items-center">
        <h2>text counter</h2>
        <div className="flex justify-between w-full gap-1  ">
          <input
            type="text"
            className="border w-[80%] p-1 outline-none bg-white"
            onChange={handleSearch}
          />
          <button
            className="border p-0.1 pl-1.25 pr-1.25 w-[20%] bg-white"
            onClick={handleFind}
          >
            find
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="border p-1 rounded-[10px] bg-white">
          OutPut: {finalOutput}
        </div>
        <div className="border p-1 rounded-[10px] bg-white">
          leters: {finalOutput.length}
        </div>
        <div className="border p-1 rounded-[10px] bg-white">
          Words: {finalOutput.split(" ").length}
        </div>
      </div>
    </div>
  );
};

export default Search;
