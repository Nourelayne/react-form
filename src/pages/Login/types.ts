import { SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";
import { TUser } from "../Entities/user";

export type TLogin = {
    isEmailFieldOnError: boolean;
    isPasswordFieldOnError: boolean;
    handleSubmit: UseFormHandleSubmit<TUser>;
    onSubmit: SubmitHandler<TUser>;
    register: UseFormRegister<TUser>;
}

export type TOnSubmit = {
    data: TUser;
    reset: UseFormReset<TUser>;
};