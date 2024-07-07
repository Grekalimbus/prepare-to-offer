"use client";
import { FormEvent } from "react";
import Button from "../../ui/Buttons/Button";
import styles from "../QuestionsPage.module.css";

interface Post {
    id: number;
    title: string;
    body: string;
}

const FilterQuestion = () => {
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const filter = formData.get("filter");
        console.log("filter", filter);
    };
    return (
        <form className={styles.searchForm} onSubmit={onSubmit}>
            <input type="text" className={styles.inputFindQuestion} placeholder="Search..." name="filter" />
            <Button text="Найти" />
        </form>
    );
};

export default FilterQuestion;
