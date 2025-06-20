import ExtensionCard from "./ExtensionCard"

function ExtensionGrid({ extensions, onToggle, RemoveExtension }) {
  console.log("extensions", extensions)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {extensions.map((ext) => (
        <ExtensionCard
          key={ext.id}
          {...ext}
          onToggle={() => onToggle(ext.id)}
          RemoveExtension={RemoveExtension}
        />
      ))}
    </div>
  )
}

export default ExtensionGrid
