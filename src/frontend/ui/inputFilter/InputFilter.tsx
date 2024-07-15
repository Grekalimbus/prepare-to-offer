import styles from "./InputFilter.module.css";

interface Props {
    placeholder: string;
    name: string;
}

const InputFilter = ({ name, placeholder }: Props) => {
    return <input name={name} placeholder={placeholder} className={styles.input} type="text" />;
};

export default InputFilter;
