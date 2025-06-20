import { useState } from "react"
import "./App.css"
import ExtensionGrid from "./components/ExtensionGrid"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import rawData from "./data.json"
const logoMap = import.meta.glob("./assets/images/*.svg", {
  eager: true,
  import: "default",
})

const dataWithImages = rawData.map((item, index) => ({
  id: index + 1,
  name: item.name,
  description: item.description,
  active: item.isActive,
  logo: logoMap[item.logo],
}))

function App() {
  const [extentions, setExtentions] = useState(dataWithImages)
  const [filter, setFilter] = useState("All")

  const filtered =
    filter === "All"
      ? extentions
      : extentions.filter((ext) =>
          filter === "Active" ? ext.active : !ext.active
        )

  const ToggleExtension = (id: number) => {
    setExtentions((prev) =>
      prev.map((ext) => (ext.id === id ? { ...ext, active: !ext.active } : ext))
    )
  }

  const RemoveExtension = (id) => {
    setExtentions((prev) => prev.filter((ext) => ext.id !== id))
  }

  return (
    <div className="min-h-screen bg-sky-100 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-800  text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Header />
        <Tabs filter={filter} setFilter={setFilter} />
        <ExtensionGrid
          extensions={filtered}
          onToggle={ToggleExtension}
          RemoveExtension={RemoveExtension}
        />
        {/* Rest of your content */}
      </div>
    </div>
  )
}

export default App
