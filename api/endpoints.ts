/* eslint-disable import/no-anonymous-default-export */
import { IProductProps, IUserItemProps } from "@/types/res";
import { axiosInstance } from "./index";

export default {
  getAllUser: () => axiosInstance.get<IUserItemProps>("/users"),
  getAllProduct: () => axiosInstance.get<IProductProps>("/products"),
};
