import { TOnSubmit } from "./types";

export const onSubmit = ({ data, reset }: TOnSubmit) => {
   if(data) console.log(data);
   reset();
}