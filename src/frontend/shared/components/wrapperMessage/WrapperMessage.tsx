import styles from "./WrapperMessage.module.css";

const WrapperMessage = ({ message }: { message: string }) => {
    return (
        <div className={styles.dummy}>
            {message.split("/").map((text: string) => {
                return (
                    <>
                        {text} <br />
                    </>
                );
            })}
        </div>
    );
};

export default WrapperMessage;
