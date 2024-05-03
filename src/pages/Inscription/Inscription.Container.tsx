import { useCallback, useMemo } from "react";
import Inscription from "./Inscription";
import { onSubmit } from "./Inscription.Helpers";
import { TUser } from "../Entities/user";
import { useFormContext } from "react-hook-form";

const InscriptionContainer = ({ onSubmitFn = onSubmit }) => {

    const formMethods = useFormContext<TUser>();

    const isEmailFieldOnError = useMemo(() => formMethods.formState.errors.email != null, [formMethods.formState.errors.email]);

    const isNameFieldOnError = useMemo(() => formMethods.formState.errors.name != null, [formMethods.formState.errors.name]);

    const isPasswordFieldOnError = useMemo(() => formMethods.formState.errors.password != null, [formMethods.formState.errors.password]);

    const onSubmitCallBack = useCallback((data: TUser) => onSubmitFn({ data, reset: formMethods.reset }), [formMethods, onSubmitFn]);

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