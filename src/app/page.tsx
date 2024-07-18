import Image from "next/image";
import Link from "next/link";
import homeImage from "../../public/homeImage.png";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.content}>
                <Image src={homeImage} alt="decoration" />
                <section className={styles.flexContainer}>
                    <h1 className={styles.title}>
                        Добро пожаловать в сервис <br /> для подготовки к собеседованиям
                    </h1>
                    <Link className={styles.linkStart} href="questionsPage/allQuestions">
                        Начать подготовку
                    </Link>
                </section>
            </div>
        </div>
    );
}
