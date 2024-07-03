import { useState } from "react";
import styles from "../Admin.module.css";
const CategoryActionNav = () => {
    const [isActive, setIsActive] = useState<string>("Добавить");
    const buttons: string[] = ["Добавить", "Изменить", "Удалить", "Входящие заявки"];
    return (
        <aside className={styles.navBar}>
            {buttons.map((text: string) => {
                return (
                    <button
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
