import React from "react";
import Login from "./components/Login";
import Adminsidebar from "./components/sidebars/Adminsidebar";
import Userlayout from "./components/layouts/Userlayout";
import Adminlayout from "./components/layouts/Adminlayout";
import Vendorlayout from "./components/layouts/Vendorlayout";

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <Adminsidebar /> */}
      {/* <Userlayout /> */}
      <Adminlayout />
      {/* <Vendorlayout /> */}
    </div>
  );
};

export default App;
