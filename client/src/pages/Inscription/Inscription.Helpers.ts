import { TOnSubmit } from "./types";

export const onSubmit = ({ data, mutation, reset }: TOnSubmit) => {
  console.log(data);
  mutation.mutate(data);
  reset();
}