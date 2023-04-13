import { StaticImageData } from "next/image";

export interface IUserItemProps {
  email: string;
  id: number;
  password: string;
  phone: string;
  username: string;
  name: IUserNameProps;
}
interface IUserNameProps {
  firstname: string;
  lastname: string;
}
export interface IProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string | StaticImageData;
}
