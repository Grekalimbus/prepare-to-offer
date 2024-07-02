import styles from "../Admin.module.css";
const SelectCategoryButtons = () => {
    return (
        <section className={styles.selectCategoryButtons}>
            <button className={styles.categoryButton}>Компании</button>
            <button className={`${styles.categoryButton} ${styles.active}`}>Технические вопросы</button>
            <button className={styles.categoryButton}>Вопросы от кандидата</button>
        </section>
    );
};

export default SelectCategoryButtons;
