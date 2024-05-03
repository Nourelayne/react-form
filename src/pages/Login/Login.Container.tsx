import { useCallback, useMemo } from "react";
import { onSubmit } from "./Login.Helpers";
import Login from "./Login";
import { useFormContext } from "react-hook-form";
import { TUser } from "../Entities/user";

const LoginContainer = ({ onSubmitFn = onSubmit}) => {

  const formMethods = useFormContext<TUser>();

  const isEmailFieldOnError = useMemo(() => formMethods.formState.errors.email != null, [formMethods.formState.errors.email]);

  const isPasswordFieldOnError = useMemo(() => formMethods.formState.errors.password != null, [formMethods.formState.errors.password]);

  const onSubmitCallBack = useCallback((data: TUser) => onSubmitFn({ data, reset: formMethods.reset }), [formMethods, onSubmitFn]);

  return <Login isEmailFieldOnError={isEmailFieldOnError} isPasswordFieldOnError={isPasswordFieldOnError} onSubmit={onSubmitCallBack} {...formMethods} />
};

export default LoginContainer;