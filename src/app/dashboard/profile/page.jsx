// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { getUser, mockLogout } from "../../../utils/auth";
// import { useRouter } from "next/navigation";

// export default function ProfilePage() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const currentUser = getUser();
//     if (!currentUser) {
//       router.push("/login"); // redirect if not logged in
//     } else {
//       setUser(currentUser);
//     }
//   }, [router]);

//   if (!user) {
//     return null; // wait for redirect
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 mb-8">
//           <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 sm:mb-0">
//             {/* <img
//               src="/profile-placeholder.png"
//               alt={user.name}
//               className="w-full h-full object-cover"
//             /> */}
//           </div>

//           <div className="text-center sm:text-left">
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
//               {user.name}
//             </h1>
//             <p className="text-gray-600 mt-1">{user.email}</p>
//             <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
//               {user.role || "User"}
//             </span>
//           </div>
//         </div>

//         {/* Account Info */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//             <h3 className="font-semibold text-gray-700 mb-2">Account Type</h3>
//             <p className="text-gray-600">{user.role || "User"}</p>
//           </div>
//           <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//             <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
//             <p className="text-gray-600">{user.email}</p>
//           </div>
//           <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//             <h3 className="font-semibold text-gray-700 mb-2">Member Since</h3>
//             <p className="text-gray-600">January 2026</p>
//           </div>
//           <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//             <h3 className="font-semibold text-gray-700 mb-2">Status</h3>
//             <p className="text-gray-600">Active</p>
//           </div>
//         </div>

//         {/* Logout */}
//         <div className="mt-8 text-center">
//           <button
//             onClick={async () => {
//               await mockLogout();
//               router.push("/login");
//             }}
//             className="bg-[#00B2EC] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition duration-300"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, mockLogout } from "../../../utils/auth";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) {
      // Not logged in, redirect to login
      router.push("/login");
    } else {
      setUser(currentUser);
    }
  }, [router]);

  if (!user) {
    return null; // waiting for redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 mb-8">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 sm:mb-0">
            {/* <img
              src="/profile-placeholder.png" // public/profile-placeholder.png
              alt={user.name}
              className="w-full h-full object-cover"
            /> */}
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {user.name}
            </h1>
            <p className="text-gray-600 mt-1">{user.email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-[#00B2EC]  rounded-full text-sm font-medium">
              {user.role || "User"}
            </span>
          </div>
        </div>

        {/* Account Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Account Type</h3>
            <p className="text-gray-600">{user.role || "User"}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Member Since</h3>
            <p className="text-gray-600">January 2026</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Status</h3>
            <p className="text-gray-600">Active</p>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-8 text-center">
          <button
            onClick={async () => {
              await mockLogout();
              router.push("/login");
            }}
            className="bg-[#00B2EC] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
