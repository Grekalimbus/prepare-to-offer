"use client";
import { useEffect, useState } from "react";
import styles from "./Companies.module.css";
import CompanyNavButtons from "./CompanyNavButtons";
const CompaniesPage = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 915) {
                setIsHidden(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window.innerWidth]);
    return (
        <div className={styles.wrapper}>
            <CompanyNavButtons isHidden={isHidden} setIsHidden={setIsHidden} />
        </div>
    );
};

export default CompaniesPage;
