import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}




// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { mockLogin } from "../../utils/auth";
// import Link from "next/link";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const result = await mockLogin(email, password);
//     setLoading(false);

//     if (result.success) {
//       router.push("/dashboard/profile"); // Redirect to profile
//     } else {
//       setError(result.error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="admin@example.com"
//               required
//               className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="password123"
//               required
//               className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//           <div className="text-sm">
//             <Link href="/register" className="font-medium text-[#444849b0] hover:text-blue-400">
//               Don't have an account? Register here
//             </Link>
//           </div>
//         </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#00B2EC]  text-white py-2 rounded-full font-semibold hover:bg-blue-400 transition duration-300"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="mt-4 text-center text-sm text-gray-600">
//         <p>Mock credentials: admin@example.com / password123</p>
//       </div>


//       </div>
//     </div>
//   );
// }
