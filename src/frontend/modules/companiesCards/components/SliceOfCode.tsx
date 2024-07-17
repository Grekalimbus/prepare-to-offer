import SnipedCode from "@/frontend/shared/components/snipetCode/SnipetCode";
import { Company } from "@/frontend/types/company/company";
import styles from "../CompaniesCards.module.css";

const SliceOfCode = ({ company }: { company: Company }) => {
    return (
        <div className={styles.wrapperSection}>
            <p className={styles.questions}>Задачи: </p>
            <SnipedCode code={company.sliceOfCode} />
        </div>
    );
};

export default SliceOfCode;
