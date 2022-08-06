import { AuthType } from "../types/Auth";
import { CategoryType } from "../types/CategoryType";
import instance from "./intance";

export const signup = (datAccount: any) => {
  const url = `/signup`;
  return instance.post(url, datAccount);
};

export const signin = (datAccount: any) => {
  const url = `/signin`;
  return instance.post(url, datAccount);
};
