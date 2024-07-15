import AcceptAll from "@/components/button/AcceptAll";
import { ReactNode } from "react";
import styles from "./WrapperCard.module.css";

interface Props {
    status?: string;
    children: ReactNode;
}
const WrapperCardContent = ({ status, children }: Props) => {
    return (
        <section className={styles.commonWrapper}>
            <div className={styles.mainContent}>{children}</div>
            {status === "PENDING" && <AcceptAll />}
        </section>
    );
};

export default WrapperCardContent;
