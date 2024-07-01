export interface FormDataStatus {
    email: boolean | null;
    password: boolean | null;
    repeadPassword: boolean | null;
}
export interface FormData {
    email: string;
    password: string;
    repeadPassword: string;
    emailRegex: RegExp;
    passwordRegex: RegExp;
    setIsFormStatus: (prevState: FormDataStatus | ((prevState: FormDataStatus) => FormDataStatus)) => void;
}

export interface PropsInputAndLabel {
    type: null | boolean;
    name: string;
    inputType: string;
    placeholder: string;
    error: string;
}
