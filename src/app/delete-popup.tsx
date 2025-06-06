interface Props {
  onConfirm: () => void
  onCancel: () => void
}

export default function DeletePopup({ onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 space-y-4 rounded shadow">
        <p className="text-center">Delete wallet?</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
