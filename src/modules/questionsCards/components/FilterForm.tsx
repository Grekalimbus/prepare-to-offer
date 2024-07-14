"use client";
import useFilterQuestions from "@/app/store";
import { FormEvent } from "react";
import styles from "../QuestionsCards.module.css";

const FilterForm = () => {
    const { filterValue, setFilterValue } = useFilterQuestions();
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const filter = formData.get("filter") as string;
        setFilterValue(filter);
        console.log("filterValue", filterValue);
    };
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
