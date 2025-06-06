export default function MainWallet() {
  return (
    <section className="p-4">
      <h1 className="mb-4 text-xl font-bold">Main Wallet</h1>
      <div className="space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded">Import</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Export</button>
      </div>
    </section>
  )
}