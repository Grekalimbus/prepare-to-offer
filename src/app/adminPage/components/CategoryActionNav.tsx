import styles from "../Admin.module.css";
const CategoryActionNav = () => {
    return (
        <aside className={styles.navBar}>
            <button className={`${styles.navButton} ${styles.activeNavButton}`}>Входящие заявки на ХХХ</button>
            <button className={styles.navButton}>Добавить ХХХ</button>
            <button className={styles.navButton}>Изменить ХХХ</button>
            <button className={styles.navButton}>Удалить ХХХ</button>
        </aside>
    );
};

export default CategoryActionNav;
