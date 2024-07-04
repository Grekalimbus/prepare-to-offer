import styles from "../Admin.module.css";

interface Props {
    isActive: string;
    setIsActive: (text: string) => void;
}
const SelectCategoryButtons = ({ isActive, setIsActive }: Props) => {
    const buttons: string[] = ["Компании", "Технические вопросы", "Вопросы от кандидата"];
    return (
        <section className={styles.selectCategoryButtons}>
            {buttons.map((text: string) => {
                return (
                    <button
                        key={text}
                        onClick={() => setIsActive(text)}
                        className={`${styles.categoryButton} ${text === isActive ? styles.active : ""}`}
                    >
                        {text}
                    </button>
                );
            })}
        </section>
    );
};

export default SelectCategoryButtons;
