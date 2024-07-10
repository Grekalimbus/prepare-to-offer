import styles from "../Admin.module.css";

interface ILink {
    text: string;
    endpoint: string;
}
const links: ILink[] = [
    { text: "Добавить", endpoint: "add" },
    { text: "Изменить", endpoint: "change" },
    { text: "Удалить", endpoint: "delete" },
    { text: "Входящие заявки", endpoint: "incoming" },
];

interface Params {
    params: { section: string; navAction: string };
}

const CategoryActionNav = ({ params }: Params) => {
    const { navAction } = params;
    return (
        <aside className={styles.navBar}>
            {links.map((link: ILink) => {
                return (
                    <button
                        key={link.endpoint}
                        className={`${styles.navButton} ${navAction === link.endpoint && styles.activeNavButton}`}
                    >
                        {link.text}
                    </button>
                );
            })}
        </aside>
    );
};

export default CategoryActionNav;
