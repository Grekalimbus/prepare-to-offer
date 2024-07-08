"use client";
import styles from "../QuestionsCards.module.css";

const FilterForm = () => {
    const onSubmit = () => {};
    return (
        <form className={styles.filterQuestions} onSubmit={onSubmit}>
            <input className={styles.inputFind} placeholder="Найти по названию" name="filter" type="text" />
            <button className={styles.buttonFind} type="submit">
                Найти
            </button>
        </form>
    );
};

export default FilterForm;
