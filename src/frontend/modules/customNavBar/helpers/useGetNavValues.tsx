import { useAdminActions, useTechnologyNav } from "@/app/store";
import { usePathname } from "next/navigation";

const useGetNavValues = () => {
    const path = usePathname();
    if (path.includes("/questionsPage")) {
        const { value, arrayButtons, setValue } = useTechnologyNav();
        return { value, setValue, arrayButtons };
    }
    const { value, arrayButtons, setValue } = useAdminActions();
    return { value, setValue, arrayButtons };
};

export default useGetNavValues;
