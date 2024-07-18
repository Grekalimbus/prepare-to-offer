import styles from "./ButtonInNav.module.css";

interface Props {
    text: string;
    onClick?: () => void;
}

const ButtonInNav = ({ text, onClick }: Props) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {text}
        </button>
    );
};

export default ButtonInNav;
