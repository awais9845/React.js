import React from "react";
import ProfileCard from "./components/ProfileCard";
import ProductCard from "./components/ProductCard";
import ClickMe from "./components/ClickMe";
import Submit from "./components/Submit";

const App = () => {
  return (
    <div className="">
      {/* <ProfileCard
        name={"Awais khan"}
        age={"18"}
        job={"Teacher"}
        image={"https://pin.it/5PvqqFM48"}
      />
      <ProfileCard
        name={"Waqas khan"}
        age={"23"}
        job={"student"}
        image={"https://pin.it/5PvqqFM48"}
      /> */}
      {/* <ProductCard
        title={"Dew"}
        price={"65$"}
        description={"This is the original product of the dew"}
      /> */}
      <ClickMe />
      <Submit />
    </div>
  );
};

export default App;
