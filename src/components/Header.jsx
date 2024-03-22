import React from "react"
import logo from "../assets/logo.png"
import ThemeSwitcher from "./ThemeSwitcher"
import Cart from "./Cart"

function Header() {
  return (
    <div className='h-24 bg-primary flex items-center justify-between px-4 py-2 dark:bg-primary-dark'>
      <div className="flex items-center gap-2">
        <img src={logo} alt='Logo' className='w-20 h-20' />
        <h1 className='hidden md:block text-4xl font-bold text-white'>
          ReactiveFood
        </h1>
      </div>
      <div className='flex gap-4'>
        <ThemeSwitcher />
        <Cart />
      </div>
    </div>
  )
}

export default Header
