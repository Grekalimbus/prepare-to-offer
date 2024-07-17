import { useNavBar } from "@/app/store";
import DefaultButton from "@/frontend/ui/Buttons/defaultButton/DefaultButton";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import styles from "./MainHeader.module.css";
import ButtonsLogin from "./components/ButtonsLogin";

const MainHeader = () => {
    const { setIsNavBar } = useNavBar();
    return (
        <header className={styles.header}>
            <div className={styles.menuWrapper}>
                <DefaultButton onClick={setIsNavBar} text={"Меню"} />;
            </div>
            <Link href="/" className={styles.iconWrapper}>
                <IoHome className={styles.iconHomePage} />
            </Link>
            <div className={styles.wrapperButtonsLogin}>
                <ButtonsLogin />
            </div>
        </header>
    );
};

export default MainHeader;
