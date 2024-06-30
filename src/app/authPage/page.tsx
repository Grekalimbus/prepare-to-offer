import SignIn from "./SignIn";
import styles from "./auth.module.css";
const page = () => {
    return (
        <div className={styles.wrapper}>
            <SignIn />
        </div>
    );
};

export default page;
