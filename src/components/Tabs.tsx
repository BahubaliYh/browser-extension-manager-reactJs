type TabsProps = {
  filter: string

  setFilter: (tab: string) => void
}
function Tabs({ filter, setFilter }: TabsProps) {
  const tabs = ["All", "Active", "Inactive"]
  return (
    <div className="flex justify-between mt-5">
      <h1 className="text-3xl font-bold">Extensions List</h1>
      <div className="flex justify-between gap-3">
        {tabs.map((tab) => (
          <button
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              filter === tab
                ? "bg-red-700 dark:bg-red-500 text-white"
                : "bg-white dark:bg-gray-700 dark:hover:bg-gray-500 text-gray-800 dark:text-white hover:opacity-80 focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-red-700 dark:focus:outline-red-500 border focus:border-1 focus:bg-red-700 focus:text-white focus:border-white dark:border-gray-600"
            }`}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
