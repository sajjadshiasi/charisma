import api from '@/api/endpoints'
import { IUserItemProps } from '@/types/res';

export const GetUserList = () =>
  new Promise<any>(
    (resolve: (res: IUserItemProps) => void, reject: (err: any) => void) => {
      api
        .getAllUser()
        .then((res) => {
          resolve(res.data as IUserItemProps);
        })
        .catch((err) => reject(err));
    },
  );