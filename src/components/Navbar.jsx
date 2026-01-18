// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = ({ isLoggedIn }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-10 top-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             {/* Logo */}

//               <Link href="/" className="">
//                 {/* <span className="text-2xl font-bold text-[#00B2EC]">
//                   MedicalCare
//                 </span> */}
//                 <img src="/logo-Siella-Medical-600px-CMYK 1.PNG" alt="Company logo" />
//               </Link>

//             {/* Desktop Menu */}
//             <div className="hidden md:ml-6 md:flex md:space-x-8">
//               <Link
//                 href="/"
//                 className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/about" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/AllProducts"
//                 className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/AllProducts" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
//               >
//                 All Products
//               </Link>
//               {isLoggedIn && (
//                 <Link
//                   href="/dashboard/add-product"
//                   className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/dashboard/add-product" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
//                 >
//                   Add Product
//                 </Link>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center">
//             <div className="hidden md:ml-4 md:flex md:items-center space-x-4">
//               {isLoggedIn ? (
//                 <>
//                   <Link
//                     href="/dashboard/profile"
//                     className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Profile
//                   </Link>
//                   <button
//                     onClick={async () => {
//                       try {
//                         // Clear local storage
//                         if (typeof window !== "undefined") {
//                           localStorage.removeItem("user");
//                           // Dispatch custom event to notify NavbarWrapper of auth change
//                           window.dispatchEvent(new Event("auth-change"));
//                         }
//                         // Redirect to logout API
//                         window.location.href = "/api/auth/logout";
//                       } catch (error) {
//                         console.error("Logout error:", error);
//                       }
//                     }}
//                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <Link
//                   href="/login"
//                   className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
//                 >
//                   Login
//                 </Link>
//               )}
//             </div>

//             {/* Mobile menu button */}
//             <div className="-mr-2 flex items-center md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="pt-2 pb-3 space-y-1">
//             <Link
//               href="/"
//               className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${pathname === "/" ? "bg-blue-50 border-blue-500 text-blue-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"}`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${pathname === "/about" ? "bg-blue-50 border-blue-500 text-blue-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"}`}
//             >
//               About
//             </Link>
//             <Link
//               href="/AllProducts"
//               className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${pathname === "/AllProducts" ? "bg-blue-50 border-blue-500 text-blue-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"}`}
//             >
//               All Products
//             </Link>
//             {isLoggedIn && (
//               <Link
//                 href="/dashboard/add-product"
//                 className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${pathname === "/dashboard/add-product" ? "bg-blue-50 border-blue-500 text-blue-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"}`}
//               >
//                 Add Product
//               </Link>
//             )}
//             <div className="mt-4 mb-2 ml-3">
//               {isLoggedIn ? (
//                 <>
//                   <Link
//                     href="/dashboard/profile"
//                     className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50"
//                   >
//                     Profile
//                   </Link>
//                   <button
//                     onClick={async () => {
//                       try {
//                         // Clear local storage
//                         if (typeof window !== "undefined") {
//                           localStorage.removeItem("user");
//                           // Dispatch custom event to notify NavbarWrapper of auth change
//                           window.dispatchEvent(new Event("auth-change"));
//                         }
//                         // Redirect to logout API
//                         window.location.href = "/api/auth/logout";
//                       } catch (error) {
//                         console.error("Logout error:", error);
//                       }
//                     }}
//                     className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <Link
//                   href="/login"
//                   className="block w-full text-left px-3 py-2 text-base font-medium bg-blue-500 text-white hover:bg-blue-600"
//                 >
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT - Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-Siella-Medical-600px-CMYK 1.PNG"
              alt="Company logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* CENTER - Menu (Desktop / Laptop) */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" pathname={pathname}>
              Home
            </NavLink>
            <NavLink href="/about" pathname={pathname}>
              About
            </NavLink>
            <NavLink href="/AllProducts" pathname={pathname}>
              All Products
            </NavLink>

            {isLoggedIn && (
              <>
                <NavLink href="/dashboard/add-product" pathname={pathname}>
                  Add Product
                </NavLink>
                <NavLink href="/dashboard/profile" pathname={pathname}>
                  Profile
                </NavLink>
              </>
            )}
          </div>

          {/* RIGHT - Login / Logout */}
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  window.dispatchEvent(new Event("auth-change"));
                  window.location.href = "/api/auth/logout";
                }}
                className="bg-[#00B2EC]
                 hover:bg-white hover:text-[#00B2EC]  
                  text-white px-4 py-2 rounded-full text-sm"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-[#00B2EC] hover:bg-white text-white px-4 py-2 hover:text-[#00B2EC] rounded-full text-sm"
              >
                Login
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <div className="p-4 space-x-[29px] ">
            <Link onClick={() => setIsMenuOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/about">
              About
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/AllProducts">
              All Products
            </Link>

            {isLoggedIn && (
              <>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="/dashboard/add-product"
                >
                  Add Product
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="/dashboard/profile"
                >
                  Profile
                </Link>
              </>
            )}

            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  localStorage.removeItem("user");
                  window.dispatchEvent(new Event("auth-change"));
                  window.location.href = "/api/auth/logout";
                }}
                className="block w-full text-left text-red-600 px-3 py-2"
              >
                Logout
              </button>
            ) : (
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/login"
                className="block px-3 py-2 bg-blue-500 text-white rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

/* Reusable Desktop Link */
const NavLink = ({ href, pathname, children }) => (
  <Link
    href={href}
    className={`text-sm font-medium border-b-2 pb-1 ${
      pathname === href
        ? "border-blue-500 text-gray-900"
        : "border-transparent text-gray-500 hover:text-gray-700"
    }`}
  >
    {children}
  </Link>
);

/* Reusable Mobile Link */
const MobileLink = ({ href, children, className = "" }) => (
  <Link
    href={href}
    className={`block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;
