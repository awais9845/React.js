import React, { useState } from "react";
import TodList from "./component/TodList";
import LoginForm from "./component/LoginForm";
import LoginPro from "./component/LoginPro";
import SignUp from "./component/SignUp";
import SignUpPro from "./component/SignUpPro";
import EmployeeRegistrationForm from "./component/EmployeeRegistrationForm";
import EmployeeRegistrationFormPro from "./component/EmployeeRegistrationFormPro";
import Books from "./component/Books";
import Teacher from "./component/Teacher";
import PracticeBook from "./component/PracticeBook";
import Posts from "./component/Posts";
import ChildA from "./component/ChildA";
import ChildB from "./component/ChildB";
import UPdateUserName from "./component/UPdateUserName";
import ShowUserName from "./component/ShowUserName";
const App = () => {
  // const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  return (
    <div>
      {/* <TodList /> */}
      {/* <LoginForm /> */}
      {/* <LoginPro /> */}
      {/* <SignUp /> */}
      {/* <SignUpPro /> */}
      {/* <EmployeeRegistrationForm /> */}
      {/* <EmployeeRegistrationFormPro /> */}
      {/* <Books /> */}
      {/* <PracticeBook /> */}
      {/* <Teacher /> */}
      {/* <Posts /> */}
      {/* <ChildA count={count} setCount={setCount} />
      <ChildB count={count} /> */}
      <UPdateUserName userName={userName} setUserName={setUserName} />
      <ShowUserName userName={userName} />
    </div>
  );
};

export default App;
