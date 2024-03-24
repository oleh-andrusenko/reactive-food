import React, { useState } from "react"

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light")

  return (
    <button
      onClick={() => {
        setTheme((prevTheme) => {
          if (prevTheme === "light") {
            document.documentElement.classList.add("dark")
            return "dark"
          } else {
            document.documentElement.classList.remove("dark")
            return "light"
          }
        })
      }}
    >
      {theme === "light" && (
        <i className='bx bx-moon text-4xl text-yellow-400 dark:text-white'></i>
      )}
      {theme === "dark" && (
        <i className='bx bx-sun text-4xl  text-yellow-400'></i>
      )}
    </button>
  )
}

export default ThemeSwitcher
