import { MdDeleteForever } from "react-icons/md";
import styles from "./Input.module.css";
interface Props {
    valueKey: string;
    name: string;
    type: string;
    required: boolean;
    placeholder: string;
    handleDecrement: (value: string) => void;
}
const InputWithRemoveButton = ({ valueKey, name, type, required, placeholder, handleDecrement }: Props) => {
    return (
        <div className={styles.wrapperInput}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={styles.inputForLink}
                required={required}
            />
            <MdDeleteForever className={styles.iconDeleteLink} onClick={() => handleDecrement(valueKey)} />
        </div>
    );
};

export default InputWithRemoveButton;
