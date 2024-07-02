import { useContext } from "react";
import { ModalPolicyContext } from "../../modalPolicy/ModalPolicyContext";
import styles from "../NavBar.module.css";
const PolicyButton = () => {
    const { setIsModalActive } = useContext(ModalPolicyContext);
    return (
        <button className={styles.navLink} onClick={() => setIsModalActive(prev => !prev)}>
            Политика конфиденциальности
        </button>
    );
};

export default PolicyButton;
