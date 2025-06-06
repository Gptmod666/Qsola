import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroicons/react"

interface Props {
  onConfirm: () => void
  onCancel: () => void
}

export default function DeletePopup({ onConfirm, onCancel }: Props) {
  return (
    <Modal isOpen onClose={onCancel} size="sm">
      <ModalContent>
        <ModalHeader>Delete Wallet</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this wallet?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="default" variant="light" onPress={onCancel}>
            Cancel
          </Button>
          <Button color="danger" onPress={onConfirm}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
