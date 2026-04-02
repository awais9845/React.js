import React from "react";

import DashboardLayout from "./components/layout/DashboardLayout";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Balance from "./pages/Balance";
import Transaction from "./pages/Transaction";
import Bills from "./pages/Bills";
import Expenses from "./pages/Expenses";
import Goals from "./pages/Goals";
import Setting from "./pages/Sitting";
import BillsDescription from "./pages/BillsDescription";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/bills/:id" element={<BillsDescription />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
