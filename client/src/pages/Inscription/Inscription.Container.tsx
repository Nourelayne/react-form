import { useCallback, useMemo } from "react";
import Inscription from "./Inscription";
import { onSubmit } from "./Inscription.Helpers";
import { TRegister } from "./types";
import { useForm } from "react-hook-form";

const InscriptionContainer = ({ onSubmitFn = onSubmit }) => {
    const formMethods = useForm<TRegister>({
        mode: 'onSubmit',
        defaultValues: {
            email: "",
            name: "",
            password: ""
        },
    });

    const isEmailFieldOnError = useMemo(() => formMethods.formState.errors.email != null, [formMethods.formState.errors.email]);

    const isNameFieldOnError = useMemo(() => formMethods.formState.errors.name != null, [formMethods.formState.errors.name]);

    const isPasswordFieldOnError = useMemo(() => formMethods.formState.errors.password != null, [formMethods.formState.errors.password]);

    const onSubmitCallBack = useCallback((data: TRegister) => onSubmitFn({ data, reset: formMethods.reset }), [formMethods, onSubmitFn]);

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