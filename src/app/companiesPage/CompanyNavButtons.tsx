import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./Companies.module.css";

interface IProps {
    isHidden: boolean;
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}
const CompanyNavButtons = ({ isHidden, setIsHidden }: IProps) => {
    return (
        <>
            <section className={`${styles.wrapperButtons} ${isHidden ? styles.hidden : ""}`}>
                <button className={styles.flexButton}>Добавить информацию о компании</button>
                <button className={`${styles.flexButton} ${styles.active}`}>Список всех компаний</button>
                <button className={styles.flexButton}>Мои компании</button>
            </section>
            {!isHidden ? (
                <IoIosArrowUp className={styles.iconToggleHide} onClick={() => setIsHidden(prev => !prev)} />
            ) : (
                <IoIosArrowDown className={styles.iconToggleHide} onClick={() => setIsHidden(prev => !prev)} />
            )}
        </>
    );
};

export default CompanyNavButtons;
