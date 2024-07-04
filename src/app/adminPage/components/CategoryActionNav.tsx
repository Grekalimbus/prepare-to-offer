import styles from "../Admin.module.css";

interface Props {
    isActive: string;
    setIsActive: (text: string) => void;
}
const CategoryActionNav = ({ isActive, setIsActive }: Props) => {
    const buttons: string[] = ["Добавить", "Изменить", "Удалить", "Входящие заявки"];
    return (
        <aside className={styles.navBar}>
            {buttons.map((text: string) => {
                return (
                    <button
                        key={text}
                        onClick={() => setIsActive(text)}
                        className={`${styles.navButton} ${text === isActive ? styles.activeNavButton : ""}`}
                    >
                        {text}
                    </button>
                );
            })}
        </aside>
    );
};

export default CategoryActionNav;
