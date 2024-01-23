"use client";

import { Modal } from '@/components/ui/modal'
import { useGlobalModal } from '@/hooks/GlobalModal';

export const Modals = () => {
    const GlbalModal = useGlobalModal()

    return (
        <Modal
            title={GlbalModal.title}
            description={GlbalModal.description}
            isOpen={GlbalModal.isOpen}
            onClose={GlbalModal.onClose}
        >

            {GlbalModal.children}

        </Modal>
    )
} 