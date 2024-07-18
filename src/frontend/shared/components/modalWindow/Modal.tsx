import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
}
const Modal = ({ children }: Props) => {
    const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null);
    useEffect(() => {
        const container = document.getElementById("modals");
        setModalContainer(container);
    }, []);
    if (!modalContainer) {
        return null; // Возвращаем null, если контейнер отсутствует или модал закрыт
    }
    return createPortal(children, modalContainer);
};

export default Modal;
