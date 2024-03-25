import React from "react"
import logo from "../assets/logo.png"
import ThemeSwitcher from "./ThemeSwitcher"
import Cart from "./Cart"

function Header({ cart, onNotify }) {
  return (
    <div className='h-24 bg-white shadow-lg rounded-b-lg flex items-center justify-between px-8 py-2 dark:bg-dark-grey sticky top-0'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='Logo' className='w-20 h-20' />
        <h1 className='hidden md:block text-4xl font-bold text-blue-600 dark:text-white'>
          Reactive
          <br />
          Food
        </h1>
      </div>
      <div className='flex gap-4'>
        <ThemeSwitcher />
        <Cart cart={cart} />
      </div>
    </div>
  )
}

export default Header
