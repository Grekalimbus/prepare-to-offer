"use client";
import useFilterQuestions from "@/app/store";

import Find from "@/frontend/ui/Buttons/find/Find";
import InputDark from "@/frontend/ui/Input/inputDark/InputDark";
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
            <InputDark required={false} name="filter" placeholder="Найти по названию" type="text" />
            <Find text="Найти" />
        </form>
    );
};

export default FilterForm;
