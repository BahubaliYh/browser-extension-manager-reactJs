import logo from "../assets/images/logo.svg"
import ThemeToggle from "./ThemeToggle"
function Header() {
  return (
    <div className="flex items-center justify-between bg-white p-2 rounded-lg dark:bg-slate-700">
      <img src={logo} alt="" className="dark:invert" />
      <ThemeToggle />
    </div>
  )
}

export default Header
