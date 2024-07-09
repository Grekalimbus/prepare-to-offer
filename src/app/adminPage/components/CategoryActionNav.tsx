import Link from "next/link";
import styles from "../Admin.module.css";

interface ILink {
    text: string;
    endpoint: string;
}
const CategoryActionNav = () => {
    const links: ILink[] = [
        { text: "Добавить", endpoint: "add" },
        { text: "Изменить", endpoint: "change" },
        { text: "Удалить", endpoint: "delete" },
        { text: "Входящие заявки", endpoint: "incoming" },
    ];
    return (
        <aside className={styles.navBar}>
            {links.map((link: ILink) => {
                return (
                    <Link href={link.endpoint} key={link.endpoint} className={`${styles.navButton}`}>
                        {link.text}
                    </Link>
                );
            })}
        </aside>
    );
};

export default CategoryActionNav;
