import { Company } from "@/types/company/company";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "../CompaniesCards.module.css";

const SliceOfCode = ({ company }: { company: Company }) => {
    return (
        <div className={styles.wrapperSection}>
            <p className={styles.questions}>Задачи: </p>
            <SyntaxHighlighter
                customStyle={{ width: "100%", borderRadius: "6px" }}
                language="javascript"
                style={atomOneDark}
            >
                {company.sliceOfCode}
            </SyntaxHighlighter>
        </div>
    );
};

export default SliceOfCode;
