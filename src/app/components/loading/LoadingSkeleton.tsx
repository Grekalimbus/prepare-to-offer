import styles from "./Loading.module.css";

const LoadingSkeleton = () => (
    <>
        {Array.from({ length: 3 }).map((_, index) => (
            <div style={{ marginBottom: "15px" }} key={index} className={styles.wrapperSkeleton}>
                <div className={styles.questionButtonFlex}>
                    <p className={styles.point}>Loading...</p>
                </div>
            </div>
        ))}
    </>
);

export default LoadingSkeleton;
