import { useCallback, useMemo, useState } from "react";
import { handleOnClick } from "./Authentication.Helpers";
import { SignIn, SignUp } from "./constants";
import Authentication from "./Authentication";

const AuthenticationContainer = ({ handleOnClickFn = handleOnClick}) => {
    const [type, setType] = useState<string>(SignIn);

    const handleOnClickCallBack = useCallback((type: string) => handleOnClickFn({ setType, type }), [handleOnClickFn]);

    const containerClassName = useMemo(() => `container ${type === SignUp ? "right-panel-active" : ""}`, [type])

    return (
        <Authentication containerClassName={containerClassName} handleOnClick={handleOnClickCallBack}/>
    );
}; 

export default AuthenticationContainer;