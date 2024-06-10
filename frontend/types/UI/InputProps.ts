import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: string;
    required?: boolean;
    containerClass?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
