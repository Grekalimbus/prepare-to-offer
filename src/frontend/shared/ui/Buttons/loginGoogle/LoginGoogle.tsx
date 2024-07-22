import styles from "./LoginGoogle.module.css";

const LoginGoogle = ({ onClick }: { onClick: () => {} }) => {
    return (
        <button className={styles.buttonGoogle} onClick={onClick}>
            Продолжить с Google
        </button>
    );
};

export default LoginGoogle;
