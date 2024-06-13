import { SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";
import { RegisterRequest } from "../../../ApiServices";
import { UseMutationResult } from "react-query";

export type TRegisterCmpt = {
    isEmailFieldOnError: boolean;
    isNameFieldOnError: boolean;
    isPasswordFieldOnError: boolean;
    handleSubmit: UseFormHandleSubmit<RegisterRequest  & { name: string }>;
    onSubmit: SubmitHandler<RegisterRequest  & { name: string }>;
    register: UseFormRegister<RegisterRequest  & { name: string }>;
}

export type TOnSubmit = {
    data: RegisterRequest & { name: string };
    mutation: UseMutationResult<void, unknown, RegisterRequest  & { name: string }, unknown>;
    reset: UseFormReset<RegisterRequest  & { name: string }>;
};
