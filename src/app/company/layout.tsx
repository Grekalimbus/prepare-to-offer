import ReusedLayout from "@/frontend/layouts/reusedLayout/ReusedLayout";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
    return <ReusedLayout>{children}</ReusedLayout>;
};

export default MainLayout;
