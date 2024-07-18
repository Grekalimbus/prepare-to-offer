import InputLight from "@/frontend/ui/Input/inputLight/InputLight";
import styles from "./InputWithError.module.css";

export interface Props {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    errorMessage: string;
    isError: boolean | null;
}

const InputWithError = ({ name, type, placeholder, required, errorMessage, isError }: Props) => {
    return (
        <div className={styles.flexContainer}>
            {!isError && isError !== null && <p className={styles.error}>{errorMessage}</p>}
            <InputLight name={name} type={type} placeholder={placeholder} required={required} />
        </div>
    );
};

export default InputWithError;
