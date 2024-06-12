import { SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";
import { UseMutationResult } from "react-query";

export type TLoginCmpt = {
    isEmailFieldOnError: boolean;
    isPasswordFieldOnError: boolean;
    handleSubmit: UseFormHandleSubmit<TLogin>;
    onSubmit: SubmitHandler<TLogin>;
    register: UseFormRegister<TLogin>;
}

export type TOnSubmit = {
    data: TLogin;
    mutation: UseMutationResult<Response, unknown, TLogin, unknown>;
    reset: UseFormReset<TLogin>;
};

export type TLogin = {
    email?: string;
    password?: string;
};
