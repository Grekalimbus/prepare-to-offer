import Link from "next/link";
import styles from "./NavLink.module.css";

interface Props {
    href: string;
    onClick?: () => void;
    text: string;
}

const NavLink = ({ href, onClick, text }: Props) => {
    return (
        <Link href={href} onClick={onClick} className={styles.navLink}>
            {text}
        </Link>
    );
};

export default NavLink;
