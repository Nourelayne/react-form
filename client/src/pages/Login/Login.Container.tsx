import { useCallback, useMemo } from "react";
import { onSubmit } from "./Login.Helpers";
import Login from "./Login";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Client, LoginRequest } from "../../../ApiServices";

const LoginContainer = ({ onSubmitFn = onSubmit}) => {

  const formMethods = useForm<LoginRequest>({
      mode: 'onSubmit',
      defaultValues: {
          email: "",
          password: ""
      },
  });

  const mutation = useMutation((data: LoginRequest) => {
    const client = new Client(import.meta.env.VITE_API_BASE_URL);

    return client.login(true, undefined, data);
  });

  const isEmailFieldOnError = useMemo(() => formMethods.formState.errors.email != null, [formMethods.formState.errors.email]);

  const isPasswordFieldOnError = useMemo(() => formMethods.formState.errors.password != null, [formMethods.formState.errors.password]);

  const onSubmitCallBack = useCallback((data: LoginRequest) => onSubmitFn({ data, mutation, reset: formMethods.reset }), [formMethods, onSubmitFn]);

  return <Login isEmailFieldOnError={isEmailFieldOnError} isPasswordFieldOnError={isPasswordFieldOnError} onSubmit={onSubmitCallBack} {...formMethods} />
};

export default LoginContainer;