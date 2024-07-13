import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useContext } from "react";
import { ModalAuthContext } from "../../../components/modalWindow/ModalAuth/ModalAuthContext";
import styles from "../NavBar.module.css";

const CompaniesButton = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const path = usePathname();
    const { setIsModalActive } = useContext(ModalAuthContext);

    const actionCompaniesPageLink = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!session) {
            e.preventDefault();
            setIsModalActive(true);
        } else {
            router.push("/companiesPage");
        }
    };
    return (
        <Link href={path} onClick={actionCompaniesPageLink} className={styles.navLink}>
            Информация о компаниях
        </Link>
    );
};

export default CompaniesButton;
