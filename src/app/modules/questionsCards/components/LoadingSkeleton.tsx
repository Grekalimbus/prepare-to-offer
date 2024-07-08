import styles from "../QuestionsCards.module.css";

const LoadingSkeleton = () => (
    <>
        {Array.from({ length: 6 }).map((_, index) => (
            <section style={{ marginBottom: "15px" }} key={index} className={styles.buttonQuestion}>
                <div className={styles.questionButtonFlex}>
                    <p className={styles.point}>Loading...</p>
                </div>
            </section>
        ))}
    </>
);

export default LoadingSkeleton;
