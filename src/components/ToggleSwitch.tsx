type ToggleSwitchProps = {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  console.log("checked", checked)

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-10 h-5 rounded-full transition-colors duration-300 relative ${
          checked
            ? "bg-red-700 dark:bg-red-500"
            : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md absolute top-0.5 transition-transform duration-300 ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </div>
    </label>
  )
}

export default ToggleSwitch
