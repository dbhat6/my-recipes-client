import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import RecipeModal from "./RecipeModal";

export default function MyImageItem({ recipe }) {
  const [cardClickState, setCardClickState] = useState(false);

  const toggleCardClickState = () => setCardClickState(!cardClickState);

  return (
    <ImageListItem>
      <img
        src={`data:image/png;base64,${recipe.image}`}
        alt={recipe.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={recipe.title}
        subtitle={recipe.description}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${recipe.title}`}
            onClick={toggleCardClickState}
          >
            <InfoIcon />
          </IconButton>
        }
      />
      {cardClickState && (
        <RecipeModal toggle={toggleCardClickState} {...recipe} />
      )}
    </ImageListItem>
  );
}
