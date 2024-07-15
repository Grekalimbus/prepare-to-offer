import { Company } from "@/frontend/types/company/company";

export interface NewCompany {
    status: string;
    company: Company;
}

export interface OjbectCompanies {
    companies: Company[];
}
