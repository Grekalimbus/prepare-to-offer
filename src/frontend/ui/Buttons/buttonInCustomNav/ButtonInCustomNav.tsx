import styles from "./ButtonInCustomNav.module.css";

interface Props {
    value: string;
    technologyValue: string;
    text: string;
    onClick: () => void;
}

const ButtonInCustomNav = ({ value, technologyValue, text, onClick }: Props) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${value === technologyValue && styles.active}`}>
            {text}
        </button>
    );
};

export default ButtonInCustomNav;
