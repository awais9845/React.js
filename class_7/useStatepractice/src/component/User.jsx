import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "Ali",
    isOnline: false,
  });

  const OnlineOffline = () => {
    setUser({ ...user, isOnline: !user.isOnline });
  };
  return (
    <div>
      <p>
        User: {user.name} is {user.isOnline}
      </p>
      <p style={{ color: user.isOnline ? false : true }}>
        {user.isOnline ? "online" : "offline"}
      </p>
      <button onClick={OnlineOffline}>toggle</button>
    </div>
  );
};

export default User;
