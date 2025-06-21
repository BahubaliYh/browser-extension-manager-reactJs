import ToggleSwitch from "./ToggleSwitch"

type ExtensionCardProps = {
  id: number
  logo: string
  name: string
  description: string
  active: boolean
  onToggle: () => void
  RemoveExtension: (id: number) => void
}

function ExtensionCard({
  id,
  logo,
  name,
  description,
  active,
  onToggle,
  RemoveExtension,
}: ExtensionCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 dark:bg-slate-700">
      <div className="flex items-start gap-4">
        <img src={logo} alt="" className="w-12 object-contain" />
        <div>
          <strong>{name}</strong>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button
          className="text-sm p-1 px-2 rounded-full border-gray-400 border hover:bg-red-700 hover:text-white focus:outline focus:outline-2 outline-offset-1 focus:outline-red-700 dark:focus:outline-red-500 focus:bg-gray-200 focus:border-white focus:text-black dark:hover:bg-red-500 dark:hover:border-red-500 dark:focus:bg-gray-600 dark:focus:text-white dark:focus:border-gray-600"
          onClick={() => RemoveExtension(id)}
        >
          Remove
        </button>
        <ToggleSwitch checked={active} onChange={onToggle} />
      </div>
    </div>
  )
}

export default ExtensionCard
