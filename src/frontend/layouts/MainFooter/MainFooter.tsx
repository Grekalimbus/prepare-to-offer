import Link from "next/link";
import { PiGithubLogoLight, PiInstagramLogoLight, PiLinkedinLogoLight, PiTelegramLogoLight } from "react-icons/pi";
import styles from "./MainFooter.module.css";

type networkLink = {
    url: string;
    icon: JSX.Element;
};

const networkLinks: networkLink[] = [
    {
        url: "https://www.instagram.com/danilimbus/",
        icon: <PiInstagramLogoLight className={styles.socialMediaIcon} />,
    },
    {
        url: "https://www.linkedin.com/in/danylo-hrechkin-63679b268/",
        icon: <PiLinkedinLogoLight className={styles.socialMediaIcon} />,
    },
    { url: "https://github.com/Grekalimbus", icon: <PiGithubLogoLight className={styles.socialMediaIcon} /> },
    { url: "https://t.me/danilimbus_02", icon: <PiTelegramLogoLight className={styles.socialMediaIcon} /> },
];

const MainFooter = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.socialMediaSection}>
                {networkLinks.map((link, index) => (
                    <Link key={index} href={link.url} className={styles.socialMediaLinks} target="_blank">
                        {link.icon}
                    </Link>
                ))}
            </section>
        </footer>
    );
};

export default MainFooter;
