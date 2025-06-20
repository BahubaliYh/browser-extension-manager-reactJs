import ExtensionCard from "./ExtensionCard"
type Extension = {
  id: number
  logo: string
  name: string
  description: string
  active: boolean
}
type ExtensionGridProps = {
  extensions: Extension[]
  onToggle: (id: number) => void
  RemoveExtension: (id: number) => void
}
function ExtensionGrid({
  extensions,
  onToggle,
  RemoveExtension,
}: ExtensionGridProps) {
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
