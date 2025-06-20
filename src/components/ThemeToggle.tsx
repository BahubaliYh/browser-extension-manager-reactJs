import { useEffect, useState } from "react"
import sunIcon from "../assets/images/icon-sun.svg"
import moonIcon from "../assets/images/icon-moon.svg"

function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])
  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline focus:outline-2 outline-offset-1 focus:outline-red-700 dark:bg-gray-600 dark:hover:bg-gray-500"
    >
      <img src={dark ? sunIcon : moonIcon} alt="" />
    </button>
  )
}

export default ThemeToggle
