import { useCallback, useMemo } from "react";
import Inscription from "./Inscription";
import { onSubmit } from "./Inscription.Helpers";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Client, RegisterRequest } from "../../../ApiServices";

const InscriptionContainer = ({ onSubmitFn = onSubmit }) => {
    const formMethods = useForm<RegisterRequest & { name: string }>({
        mode: 'onSubmit',
        defaultValues: {
            email: "",
            password: "",
            name: ""
        },
    });

    const mutation = useMutation((data: RegisterRequest  & { name: string }) => {
        const client = new Client(import.meta.env.VITE_API_BASE_URL);
    
        return client.register({email: data.email, password: data.password} as RegisterRequest);
      });

    const isEmailFieldOnError = useMemo(() => formMethods.formState.errors.email != null, [formMethods.formState.errors.email]);

    const isNameFieldOnError = useMemo(() => formMethods.formState.errors.name != null, [formMethods.formState.errors.name]);

    const isPasswordFieldOnError = useMemo(() => formMethods.formState.errors.password != null, [formMethods.formState.errors.password]);

    const onSubmitCallBack = useCallback((data: RegisterRequest & { name: string }) => onSubmitFn({ data, mutation, reset: formMethods.reset }), [formMethods, onSubmitFn]);

    return (
        <Inscription 
            isEmailFieldOnError={isEmailFieldOnError} 
            isNameFieldOnError={isNameFieldOnError} 
            isPasswordFieldOnError={isPasswordFieldOnError} 
            onSubmit={onSubmitCallBack} 
            {...formMethods} 
        />
    );
};

export default InscriptionContainer;