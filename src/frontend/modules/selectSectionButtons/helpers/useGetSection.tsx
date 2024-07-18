import { useAdminSection, useCompanySection, useQuestionSection } from "@/app/store";
import { usePathname } from "next/navigation";

const useGetSection = () => {
    const path = usePathname();
    if (path.includes("/adminPage")) {
        const { value, sectionButtons, setValue } = useAdminSection();
        return { value, setValue, sectionButtons };
    }
    if (path.includes("/company")) {
        const { value, sectionButtons, setValue } = useCompanySection();
        return { value, setValue, sectionButtons };
    }
    const { value, sectionButtons, setValue } = useQuestionSection();
    return { value, setValue, sectionButtons };
};

export default useGetSection;
