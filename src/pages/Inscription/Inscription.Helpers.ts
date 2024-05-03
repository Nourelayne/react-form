import { TOnSubmit } from "./types";


export const onSubmit = ({ data, reset }: TOnSubmit) => {
  console.log(data);
  reset();
}