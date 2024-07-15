import { useAuthModal } from "@/app/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";
import styles from "../NavBar.module.css";

const CompaniesButton = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const path = usePathname();
    const { setIsAuthModal } = useAuthModal();

    const actionCompaniesPageLink = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!session) {
            e.preventDefault();
            setIsAuthModal();
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
