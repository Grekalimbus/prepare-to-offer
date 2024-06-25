import styles from "./UIButton.module.css";

interface IProps {
    text: string;
}
const Button = ({ text }: IProps) => {
    return <div className={styles.button}>{text}</div>;
};

export default Button;
