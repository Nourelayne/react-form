import { TOnSubmit } from "./types";

export const onSubmit = ({ data, mutation, reset }: TOnSubmit) => {
   mutation.mutate(data);
   reset();
}