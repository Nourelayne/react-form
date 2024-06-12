export type TAuthentication = {
   containerClassName: string;
   handleOnClick: (text: string) => void;
}

export type THandleOnClick = {
   setType: React.Dispatch<React.SetStateAction<string>>;
   type: string;
}