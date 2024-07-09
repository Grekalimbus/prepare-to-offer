import Link from "next/link";
import { IoHome } from "react-icons/io5";
import styles from "./MainHeader.module.css";
import ButtonsLogin from "./components/ButtonsLogin";
import MenuButton from "./components/MenuButton";

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <section className={styles.wrapperHeaderContent}>
                <div style={{ width: "33%" }}>
                    <MenuButton />
                </div>
                <Link href="/" style={{ padding: "12px" }}>
                    <IoHome className={styles.iconHomePage} />
                </Link>
                <div className={styles.wrapperButtonsLogin}>
                    <ButtonsLogin />
                </div>
            </section>
        </header>
    );
};

export default MainHeader;
