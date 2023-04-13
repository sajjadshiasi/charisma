import { Box, TextField } from "@mui/material";
import { IBoxProps } from "./Interface";

const BoxWrapper = (props: IBoxProps) => {
  const { children, varient, value, onChange } = props;
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 100px)",
          backgroundColor: "#fff",
          marginTop: "20px",
          minWidth: 380,
          paddingX: "1rem",
          position: "relative",
        }}
      >
        {varient === "data" ? (
          <div>
            <TextField
              fullWidth
              value={value}
              onChange={onChange}
              style={{ marginTop: "1rem" }}
              id="outlined-basic"
              label="Search"
              variant="outlined"
            />
          </div>
        ) : null}
        <div
          style={{ overflowX: "hidden", overflowY: "scroll", maxHeight: "90%" }}
        >
          {children}
        </div>
      </Box>
    </>
  );
};
export default BoxWrapper;
