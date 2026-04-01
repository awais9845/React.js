import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyBills } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { LuGoal } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";

export const Links = [
  {
    path: "/",
    link: "Overview",
    icon: RxDashboard,
  },
  {
    path: "/balance",
    link: "Balance",
    icon: MdAccountBalanceWallet,
  },
  {
    path: "/transaction",
    link: "Transaction",
    icon: GrTransaction,
  },
  {
    path: "/bills",
    link: "Bills",
    icon: FaMoneyBills,
  },
  {
    path: "/expenses",
    link: "Expenses",
    icon: LuCircleDollarSign,
  },
  {
    path: "/goals",
    link: "Goals",
    icon: LuGoal,
  },
  {
    path: "/setting",
    link: "Setting",
    icon: IoSettingsOutline,
  },
];
