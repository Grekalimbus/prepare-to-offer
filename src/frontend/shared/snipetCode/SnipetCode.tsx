import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SnipedCode = ({ code }: { code: string }) => {
    return (
        <SyntaxHighlighter
            customStyle={{ width: "100%", borderRadius: "6px", textAlign: "start" }}
            language="jsx"
            style={atomOneDark}
        >
            {code}
        </SyntaxHighlighter>
    );
};

export default SnipedCode;
