import { Backdrop } from "@mui/material";
import React from "react";
import FullRecipe from "./FullRecipe";

export default function MyBackdrop(props) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      onClick={props.toggle}
    >
      <FullRecipe {...props} />
    </Backdrop>
  );
}
