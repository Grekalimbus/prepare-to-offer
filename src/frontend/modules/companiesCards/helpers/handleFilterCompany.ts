import { Company } from "@/frontend/types/company/company";

export const handleFilterCompany = (companies: Company[] | undefined, filterValue: string) => {
    const filterCompany = companies?.filter(company =>
        company.companyName.toLowerCase().includes(filterValue.toLowerCase()),
    );
    return filterCompany;
};
