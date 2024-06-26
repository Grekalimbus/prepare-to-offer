import { signIn } from "next-auth/react";
import styles from "../SignIn.module.css";

const LowerSectionForm = () => {
    return (
        <>
            <p className={styles.titleWarning}>
                Вы соглашаетесь с нашими Условиями использования и подтверждаете, что прочитали и поняли нашу
                <span className={styles.span}>Политику конфиденциальности</span>. Ваши данные будут использоваться в
                соответствии с этой политикой для обеспечения безопасности и улучшения качества наших услуг.
            </p>
            <button className={styles.buttonSubmit}>Зарегистрироваться</button>
            <div className={styles.separator}>
                <span className={styles.separatorElem}></span>
                <span className={styles.separatorText}>OR</span>
                <span className={styles.separatorElem}></span>
            </div>
            <button className={styles.buttonGoogle} onClick={() => signIn("google", { callbackUrl: "/" })}>
                Продолжить с Google
            </button>
        </>
    );
};

export default LowerSectionForm;
