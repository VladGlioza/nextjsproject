"use client";

import styles from "@/styles/Misc/modal.module.css";
import { InputHTMLAttributes, forwardRef } from "react";

interface ModalProps extends InputHTMLAttributes<HTMLInputElement> {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
    ({ show, onClose, children, ...props }, ref) => {
        if (!show) {
            return null;
        }

        return (
            <div {...props} className={styles.modalOverlay}>
                <div className={styles.modal} ref={ref}>
                    <div className={styles.modalContent}>{children}</div>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </div>
            </div>
        );
    }
);
