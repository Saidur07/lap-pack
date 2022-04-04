import React from "react";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const navigation = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Reviews", to: "/reviews" },
    { id: 3, name: "Dashboard", to: "/dashboard" },
    { id: 4, name: "Blogs", to: "/blogs" },
    { id: 5, name: "About", to: "/about" },
  ];
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <div className="flex md:order-2 md:hidden">
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuAlt2Icon className="h-6 w-6 " />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {navigation.map((item) => (
                <li key={item.id}>
                  <CustomLink
                    to={item.to}
                    className="text-xl  block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.name}
                  </CustomLink>
                  <hr className="container w-12 mx-auto" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
