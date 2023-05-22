import { Backdrop } from "@mui/material";
import React from "react";

export default function MyBackdrop(props) {
  const [backdropState, setBackdropState] = React.useState(false);

  const toggleBackdrop = () => setBackdropState(!backdropState);

    return(
        <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropState}
        onClick={toggleBackdrop}
      >
        {props.child}
      </Backdrop>
    )
}