"use client";
import { ReactNode } from "react";
import ReusedLayout from "../../frontend/layouts/reusedLayout/ReusedLayout";

type Props = {
    children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
    return <ReusedLayout>{children}</ReusedLayout>;
};

export default MainLayout;
