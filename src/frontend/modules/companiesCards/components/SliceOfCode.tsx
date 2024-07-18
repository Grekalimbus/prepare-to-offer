import SnipedCode from "@/frontend/shared/components/snipetCode/SnipetCode";
import Text from "@/frontend/shared/components/text/Text";
import { Company } from "@/frontend/types/company/company";
import styles from "../CompaniesCards.module.css";

const SliceOfCode = ({ company }: { company: Company }) => {
    return (
        <div className={styles.wrapperSection}>
            <Text text="Задачи:" />
            <SnipedCode code={company.sliceOfCode} />
        </div>
    );
};

export default SliceOfCode;
