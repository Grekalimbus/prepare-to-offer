"use client";
import { useEffect, useState } from "react";
import styles from "./Companies.module.css";
import CompanyNavButtons from "./CompanyNavButtons";
const CompaniesPage = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    useEffect(() => {
        function handleResize() {
            if (typeof window !== "undefined" && window.innerWidth > 915) {
                setIsHidden(false);
            }
        }
        if (typeof window !== "undefined") {
            handleResize();
            window.addEventListener("resize", handleResize);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);
    return (
        <div className={styles.wrapper}>
            <CompanyNavButtons isHidden={isHidden} setIsHidden={setIsHidden} />
            {/* <CompanyCard /> */}
        </div>
    );
};

export default CompaniesPage;
