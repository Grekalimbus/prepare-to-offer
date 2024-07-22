export interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
}

export type TextAreaProps = Omit<InputProps, "type">;
