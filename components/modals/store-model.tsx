'use-client'
import {useModalStore} from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {

    const storeModel = useModalStore();
    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and categories"
            isOpen={storeModel.isOpen}
            onClose={storeModel.onClose}
        >
            <p>Future create store form</p>
        </Modal>
    )
}