"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search,Siren,PenSquare,Home,X } from "lucide-react"

export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Home", path: "/" },
    { title: "Report Anomaly", path: "/report" },
    { title: "Advisory", path: "/advisory" },
    { title: "Maps", path: "/maps" },
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register"},
    { title: "User", path: "/user"},
  ]

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-black">
                JalDoot
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
           {
                state ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />
           }
            </button>
          </div>
        </div>
        <div
          className={`flex-1 sm:relative sm:shadow-none absolute sm:bg-transparent bg-white w-full z-20 -ml-3 pl-5 transition-all duration-500 ease-linear justify-self-center pb-3 pt-8 shadow-2xl md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-black">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            {/* <form className="flex items-center  space-x-2 border rounded-md p-2">
              <Search className="h-5 w-5 flex-none text-gray-300" />
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
