import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";

const Settings = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-500 text-sm">
            Manage your account & preferences
          </p>
        </div>
        <IoSettingsOutline className="text-3xl text-indigo-500" />
      </div>

      {/* Profile Settings */}
      <div className="flex items-center gap-3 mb-4 p-3 bg-indigo-50 rounded-lg cursor-pointer hover:bg-indigo-100 transition">
        <FaUserCircle className="text-xl text-indigo-500" />
        <div>
          <p className="text-gray-500 text-sm">Profile</p>
          <h1 className="text-gray-800 font-medium">Update your info</h1>
        </div>
      </div>

      {/* Security Settings */}
      <div className="flex items-center gap-3 mb-4 p-3 bg-indigo-50 rounded-lg cursor-pointer hover:bg-indigo-100 transition">
        <RiLock2Line className="text-xl text-indigo-500" />
        <div>
          <p className="text-gray-500 text-sm">Security</p>
          <h1 className="text-gray-800 font-medium">Change password & 2FA</h1>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg cursor-pointer hover:bg-indigo-100 transition">
        <MdNotificationsNone className="text-xl text-indigo-500" />
        <div>
          <p className="text-gray-500 text-sm">Notifications</p>
          <h1 className="text-gray-800 font-medium">Manage alerts & emails</h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;
