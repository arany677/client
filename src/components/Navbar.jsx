import React from "react";

function Navbar() {
  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center">
            {" "}
            {/* Removed 'hidden lg:flex' to always show menu */}
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="border-b-2 border-transparent hover:border-blue-500 pb-1 transition-colors duration-200">
                  Item 1
                </a>
              </li>
              <li>
                <details>
                  <summary className="border-b-2 border-transparent hover:border-blue-500 pb-1 transition-colors duration-200">
                    Parent
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a className="border-b-2 border-transparent hover:border-blue-500 pb-1 transition-colors duration-200">
                        Submenu 1
                      </a>
                    </li>
                    <li>
                      <a className="border-b-2 border-transparent hover:border-blue-500 pb-1 transition-colors duration-200">
                        Submenu 2
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="border-b-2 border-transparent hover:border-blue-500 pb-1 transition-colors duration-200">
                  Item 3
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
