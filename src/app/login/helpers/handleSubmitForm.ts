import { signIn } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";

export interface FormDataStatus {
    email: boolean | null;
}

interface Props {
    event: FormEvent<HTMLFormElement>;
    setIsFormStatus: (prevState: FormDataStatus | ((prevState: FormDataStatus) => FormDataStatus)) => void;
    router: AppRouterInstance;
}

export const handleSubmitForm = async ({ event, setIsFormStatus, router }: Props) => {
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
    });
    if (res && !res.error) {
        router.push("/");
    } else {
        setIsFormStatus({ email: false });
    }
};
