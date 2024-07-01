import { FormData } from "../types/types";

export const checkIsFormStatus = ({
    email,
    password,
    repeadPassword,
    emailRegex,
    passwordRegex,
    setIsFormStatus,
}: FormData) => {
    const formStatus = {
        email: emailRegex.test(email),
        password: passwordRegex.test(password),
        repeadPassword: password === repeadPassword,
    };

    setIsFormStatus(prev => ({ ...prev, ...formStatus }));

    return formStatus.email && formStatus.password && formStatus.repeadPassword;
};
