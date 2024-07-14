import { signIn } from "next-auth/react";
import styles from "../Login.module.css";

const LowerSectionForm = () => {
    return (
        <>
            <button className={styles.buttonSubmit}>Войти</button>
            <div className={styles.separator}>
                <span className={styles.separatorElem}></span>
                <span className={styles.separatorText}>OR</span>
                <span className={styles.separatorElem}></span>
            </div>
            <button
                className={styles.buttonGoogle}
                onClick={() => signIn("google", { callbackUrl: "/questionsPage/allQuestions" })}
            >
                Продолжить с Google
            </button>
        </>
    );
};

export default LowerSectionForm;
