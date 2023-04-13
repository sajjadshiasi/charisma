import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { AddUser, RemoveItem, ClearList } from "@/redux/slice";
import api from "@/api/endpoints";
import { IProductProps, IUserItemProps } from "@/types/res";
import { Button, Chip, Container } from "@mui/material";
import { BoxWrapper, ListItemWrapper } from "@/componets";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: user } = await api.getAllUser();
  const { data: products } = await api.getAllProduct();

  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user: user,
      product: products,
    },
  };
};
const Home = ({
  user,
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const store = useStore();
  const [query, setQuery] = useState<string>("");
  const [productQuery, setProductQuery] = useState<string>("");
  const dispatch = useDispatch();
  const { selectedItem } = useSelector((items: any) => items.addToBox);
  //@ts-ignore
  let selectItems = store.getState().addToBox.user;
  const onChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const onChangeProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductQuery(event.target.value);
  };
  return (
    <Container fixed>
      <div className="wrapper">
        <BoxWrapper varient="data" value={query} onChange={onChangeUser}>
          {user
            .filter((items: IUserItemProps) => {
              if (query === "") {
                return items;
              } else if (
                items.username
                  .toLocaleLowerCase()
                  .includes(query.toLocaleLowerCase())
              ) {
                return items;
              }
            })
            .map((items: IUserItemProps, index: number) => (
              <ListItemWrapper
                key={index}
                index={index}
                head={items.username}
                sub={items.email}
                onClick={() => dispatch(AddUser(items))}
              />
            ))}
        </BoxWrapper>
        <BoxWrapper
          varient="data"
          value={productQuery}
          onChange={onChangeProduct}
        >
          {product
            .filter((items: IProductProps) => {
              if (productQuery === "") {
                return items;
              } else if (
                items.title
                  .toLocaleLowerCase()
                  .includes(productQuery.toLocaleLowerCase())
              ) {
                return items;
              }
            })
            .map((items: IProductProps, index: number) => (
              <ListItemWrapper
                key={index}
                onClick={() => dispatch(AddUser(items))}
                index={index}
                head={items.title}
                sub={items.description}
              />
            ))}
        </BoxWrapper>
        <BoxWrapper varient="select">
          {selectItems?.map((userSelect: any, index: number) => (
            <Chip
              key={index}
              label={
                userSelect.username !== undefined
                  ? userSelect.username
                  : userSelect.title
              }
              onDelete={() => {
                dispatch(RemoveItem(userSelect.id));
              }}
            />
          ))}
          <div className="absolute top-full left-1/2  -translate-x-1/2 -translate-y-full">
            <Button
              onClick={() => {
                dispatch(ClearList());
              }}
              type="button"
              variant="contained"
              color="primary"
              className="bg-blue-500"
            >
              Clear List
            </Button>
          </div>
        </BoxWrapper>
      </div>
    </Container>
  );
};
export default Home;
