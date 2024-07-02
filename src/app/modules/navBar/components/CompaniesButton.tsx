import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MouseEvent, useContext } from "react";
import { ModalAuthContext } from "../../ModalAuth/ModalAuthContext";
import styles from "../NavBar.module.css";

const CompaniesButton = () => {
    const session = useSession();
    const router = useRouter();
    const { setIsModalActive } = useContext(ModalAuthContext);
    const actionCompaniesPageLink = (e: MouseEvent<HTMLButtonElement>, url: string) => {
        if (!session.data) {
            e.preventDefault();
            setIsModalActive(true);
        } else {
            router.push(url);
        }
    };
    return (
        <button onClick={e => actionCompaniesPageLink(e, "/companiesPage")} className={styles.navLink}>
            Информация о компаниях
        </button>
    );
};

export default CompaniesButton;
