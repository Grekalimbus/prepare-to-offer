"use client";
import useFilterQuestions from "@/app/store";
import ButtonHandleFilter from "@/frontend/ui/buttonHandleFilter/ButtonHandleFilter";
import InputFilter from "@/frontend/ui/inputFilter/InputFilter";
import { FormEvent } from "react";
import styles from "../QuestionsCards.module.css";

const FilterForm = () => {
    const { setFilterValue } = useFilterQuestions();
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const filter = formData.get("filter") as string;
        setFilterValue(filter);
    };
    return (
        <form className={styles.filterQuestions} onSubmit={onSubmit}>
            <InputFilter name="filter" placeholder="Найти по названию" />
            <ButtonHandleFilter text="Найти" />
        </form>
    );
};

export default FilterForm;
