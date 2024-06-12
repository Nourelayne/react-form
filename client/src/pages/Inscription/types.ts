import { SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";

export type TRegisterCmpt = {
    isEmailFieldOnError: boolean;
    isNameFieldOnError: boolean;
    isPasswordFieldOnError: boolean;
    handleSubmit: UseFormHandleSubmit<TRegister>;
    onSubmit: SubmitHandler<TRegister>;
    register: UseFormRegister<TRegister>;
}

export type TOnSubmit = {
    data: TRegister;
    reset: UseFormReset<TRegister>;
};

export type TRegister = {
    email?: string;
    name?: string;
    password?: string;
};
