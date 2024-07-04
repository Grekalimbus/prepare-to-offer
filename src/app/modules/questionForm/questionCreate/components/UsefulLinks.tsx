import { useState } from "react";
import { MdDeleteForever, MdLink } from "react-icons/md";
import styles from "../QuestionCreate.module.css";

const UsefulLinks = () => {
    const [numberLinks, setNumberLinks] = useState<[] | string[]>([]);
    const handleIncrement = () => {
        setNumberLinks(prev => {
            const nextNumber = prev.length === 0 ? 0 : Number(prev[prev.length - 1]) + 1;
            return [...prev, String(nextNumber)];
        });
    };

    const handleDecrement = (value: string) => {
        setNumberLinks(prev => prev.filter(item => item !== value));
    };
    return (
        <>
            <button onClick={handleIncrement} className={styles.buttonAdd}>
                Добавить ссылки на материалы
                <MdLink className={styles.iconInButton} />
            </button>
            {numberLinks.length > 0 && (
                <>
                    {numberLinks.map(item => {
                        return (
                            <div key={item} className={styles.wrapperInput}>
                                <input
                                    type="text"
                                    name="link"
                                    placeholder="https://any-resourses.io"
                                    className={styles.inputForLink}
                                    required
                                />
                                <MdDeleteForever
                                    className={styles.iconDeleteLink}
                                    onClick={() => handleDecrement(item)}
                                />
                            </div>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default UsefulLinks;
