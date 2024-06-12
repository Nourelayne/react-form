import { useCallback, useMemo } from "react";
import { onSubmit } from "./Login.Helpers";
import Login from "./Login";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { TLogin } from "./types";

const LoginContainer = ({ onSubmitFn = onSubmit}) => {

  const formMethods = useForm<TLogin>({
      mode: 'onSubmit',
      defaultValues: {
          email: "",
          password: ""
      },
  });

  const mutation = useMutation((data: TLogin) => fetch('https://localhost:7284/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }))

  const isEmailFieldOnError = useMemo(() => formMethods.formState.errors.email != null, [formMethods.formState.errors.email]);

  const isPasswordFieldOnError = useMemo(() => formMethods.formState.errors.password != null, [formMethods.formState.errors.password]);

  const onSubmitCallBack = useCallback((data: TLogin) => onSubmitFn({ data, mutation, reset: formMethods.reset }), [formMethods, onSubmitFn]);

  return <Login isEmailFieldOnError={isEmailFieldOnError} isPasswordFieldOnError={isPasswordFieldOnError} onSubmit={onSubmitCallBack} {...formMethods} />
};

export default LoginContainer;