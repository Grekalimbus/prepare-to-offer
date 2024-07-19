"use client";
import Find from "@/frontend/ui/Buttons/find/Find";
import InputDark from "@/frontend/ui/Input/inputDark/InputDark";
import { FormEvent } from "react";
import styles from "./FilterForm.module.css";

interface Props {
    setFilterValue: (value: string) => void;
}
const FilterForm = ({ setFilterValue }: Props) => {
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const filter = formData.get("filter") as string;
        setFilterValue(filter);
    };
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <InputDark required={false} name="filter" placeholder="Найти по названию" type="text" />
            <Find text="Найти" />
        </form>
    );
};

export default FilterForm;
