import { SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";
import { UseMutationResult } from "react-query";
import { AccessTokenResponse, LoginRequest } from "../../../ApiServices";

export type TLoginCmpt = {
    isEmailFieldOnError: boolean;
    isPasswordFieldOnError: boolean;
    handleSubmit: UseFormHandleSubmit<LoginRequest>;
    onSubmit: SubmitHandler<LoginRequest>;
    register: UseFormRegister<LoginRequest>;
}

export type TOnSubmit = {
    data: LoginRequest;
    mutation: UseMutationResult<AccessTokenResponse, unknown, LoginRequest, unknown>;
    reset: UseFormReset<LoginRequest>;
};
