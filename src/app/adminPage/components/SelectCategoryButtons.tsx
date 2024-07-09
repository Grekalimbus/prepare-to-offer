import Link from "next/link";
import styles from "../Admin.module.css";

interface ILink {
    text: string;
    endpoint: string;
}

const links: ILink[] = [
    { text: "Компании", endpoint: "companies" },
    { text: "Технические вопросы", endpoint: "techQuestions" },
    { text: "Вопросы от кандидата", endpoint: "questionsCandidate" },
];
interface Params {
    params: { section: string; navAction: string };
}

const SelectCategoryButtons = ({ params }: Params) => {
    const { section, navAction } = params;
    console.log("params", params);
    return (
        <section className={styles.selectCategoryButtons}>
            {links.map((link: ILink) => {
                return (
                    <Link
                        href={`/adminPage/section/${link.endpoint}/navAction/${navAction}`}
                        key={link.endpoint}
                        className={`${styles.categoryButton} ${section === link.endpoint && styles.active}`}
                    >
                        {link.text}
                    </Link>
                );
            })}
        </section>
    );
};

export default SelectCategoryButtons;
