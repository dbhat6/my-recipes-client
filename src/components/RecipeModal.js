import { Backdrop, Modal } from "@mui/material";
import React from "react";
import FullRecipe from "./FullRecipe";

export default function RecipeModal(props) {
  return (
    <Modal
      open={true}
      onClose={props.toggle}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 1000,
        },
      }}
    >
      <>
        <FullRecipe {...props} />
      </>
    </Modal>
  );
}
