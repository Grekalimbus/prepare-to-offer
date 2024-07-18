"use client";
import useUser from "@/frontend/domains/user/useUser";
import AcceptAll from "@/frontend/ui/Buttons/acceptAll/AcceptAll";
import { ReactNode } from "react";
import styles from "./WrapperCard.module.css";

interface Props {
    status?: string;
    children: ReactNode;
}
const WrapperCardContent = ({ status, children }: Props) => {
    const { isAdmin } = useUser();
    return (
        <section className={styles.commonWrapper}>
            <div className={styles.mainContent}>{children}</div>
            {status === "PENDING" && isAdmin && <AcceptAll />}
        </section>
    );
};

export default WrapperCardContent;
