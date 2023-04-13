import { IListItemProps } from "./Interface";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

const ListItemWrapper = (props: IListItemProps) => {
  const { onClick, index, head, sub } = props;
  return (
    <button style={{ display: "flex" }} onClick={onClick}>
      <ListItem style={{ display: "block" }}>
        <ListItemAvatar className="flex flex-row w-full h-full items-center">
          <Avatar>{index + 1}</Avatar>
          <ListItemText primary={head} secondary={sub} />
        </ListItemAvatar>
      </ListItem>
    </button>
  );
};
export default ListItemWrapper;
