import { useCallback, useMemo, useState } from "react";
import { handleOnClick } from "./Authentication.Helpers";
import { SignIn, SignUp } from "./constants";
import { FormProvider, useForm } from "react-hook-form";
import { TUser } from "../Entities/user";
import Authentication from "./Authentication";

const AuthenticationContainer = ({ handleOnClickFn = handleOnClick}) => {

    const [type, setType] = useState<string>(SignIn);

    const methods = useForm<TUser>({
        mode: 'onSubmit',
        defaultValues: {
            email: "",
            name: "",
            password: ""
        },
    });

    const handleOnClickCallBack = useCallback((type: string) => handleOnClickFn({ setType, type }), [handleOnClickFn]);

    const containerClassName = useMemo(() => `container ${type === SignUp ? "right-panel-active" : ""}`, [type])

    return (
        <FormProvider {...methods}>
            <Authentication containerClassName={containerClassName} handleOnClick={handleOnClickCallBack}/>
        </FormProvider>
    );
}; 

export default AuthenticationContainer;